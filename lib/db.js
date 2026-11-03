// Storage adapter: MongoDB when MONGODB_URI is set, otherwise a local JSON
// file (used for local development and tests — no external services needed).
import { MongoClient } from 'mongodb';
import { readFile, writeFile, rename, mkdir } from 'node:fs/promises';
import path from 'path';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data');
const FILE_PATH = path.join(DATA_DIR, 'db.json');

let mongoClient = null;
let mongoDb = null;
let fileDb = null;
let fileChain = Promise.resolve();

export const dbKind = () => (process.env.MONGODB_URI ? 'mongo' : 'file');

export async function initDb() {
  if (process.env.MONGODB_URI) {
    mongoClient = new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });
    await mongoClient.connect();
    mongoDb = mongoClient.db();
    await Promise.all([
      mongoDb.collection('users').createIndex({ userId: 1 }, { unique: true }),
      mongoDb.collection('sessions').createIndex({ tokenHash: 1 }, { unique: true }),
      mongoDb.collection('sessions').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
      mongoDb.collection('progress').createIndex({ userId: 1 }, { unique: true }),
    ]);
    console.log('DB: mongodb connected');
    return;
  }
  await mkdir(DATA_DIR, { recursive: true });
  try {
    fileDb = JSON.parse(await readFile(FILE_PATH, 'utf8'));
  } catch {
    fileDb = {};
  }
  fileDb.users = Array.isArray(fileDb.users) ? fileDb.users : [];
  fileDb.sessions = Array.isArray(fileDb.sessions) ? fileDb.sessions : [];
  fileDb.progress = Array.isArray(fileDb.progress) ? fileDb.progress : [];
  console.log(`DB: file storage at ${FILE_PATH}`);
}

export async function dbHealth() {
  if (mongoDb) {
    await mongoDb.command({ ping: 1 });
    return true;
  }
  return Boolean(fileDb);
}

const persistFile = () => {
  const tmp = `${FILE_PATH}.tmp`;
  fileChain = fileChain
    .then(() => writeFile(tmp, JSON.stringify(fileDb), 'utf8'))
    .then(() => rename(tmp, FILE_PATH))
    .catch((err) => console.error('DB file persist failed:', err.message));
};

export const users = {
  async findByUserId(userId) {
    if (mongoDb) return mongoDb.collection('users').findOne({ userId });
    return fileDb.users.find((u) => u.userId === userId) || null;
  },
  async create(doc) {
    if (mongoDb) return mongoDb.collection('users').insertOne(doc);
    fileDb.users.push(doc);
    persistFile();
    return { insertedId: doc.userId };
  },
  async deleteByUserId(userId) {
    if (mongoDb) return mongoDb.collection('users').deleteOne({ userId });
    fileDb.users = fileDb.users.filter((u) => u.userId !== userId);
    persistFile();
    return { deletedCount: 1 };
  },
};

export const sessions = {
  async create(doc) {
    if (mongoDb) return mongoDb.collection('sessions').insertOne(doc);
    fileDb.sessions.push(doc);
    persistFile();
    return { insertedId: doc.tokenHash };
  },
  async findByTokenHash(tokenHash) {
    if (mongoDb) return mongoDb.collection('sessions').findOne({ tokenHash });
    return fileDb.sessions.find((s) => s.tokenHash === tokenHash) || null;
  },
  async extend(tokenHash, expiresAt) {
    if (mongoDb) {
      return mongoDb.collection('sessions').updateOne({ tokenHash }, { $set: { expiresAt } });
    }
    const s = fileDb.sessions.find((x) => x.tokenHash === tokenHash);
    if (s) s.expiresAt = expiresAt;
    persistFile();
    return { modifiedCount: s ? 1 : 0 };
  },
  async deleteByTokenHash(tokenHash) {
    if (mongoDb) return mongoDb.collection('sessions').deleteOne({ tokenHash });
    fileDb.sessions = fileDb.sessions.filter((s) => s.tokenHash !== tokenHash);
    persistFile();
    return { deletedCount: 1 };
  },
  async deleteByUserId(userId) {
    if (mongoDb) return mongoDb.collection('sessions').deleteMany({ userId });
    fileDb.sessions = fileDb.sessions.filter((s) => s.userId !== userId);
    persistFile();
    return { deletedCount: 1 };
  },
};

export const progressStore = {
  async get(userId) {
    if (mongoDb) return mongoDb.collection('progress').findOne({ userId });
    return fileDb.progress.find((p) => p.userId === userId) || null;
  },
  async put(userId, data, updatedAt) {
    if (mongoDb) {
      return mongoDb.collection('progress').updateOne(
        { userId },
        { $set: { userId, data, updatedAt } },
        { upsert: true },
      );
    }
    const existing = fileDb.progress.find((p) => p.userId === userId);
    if (existing) {
      existing.data = data;
      existing.updatedAt = updatedAt;
    } else {
      fileDb.progress.push({ userId, data, updatedAt });
    }
    persistFile();
    return { upserted: true };
  },
  async deleteByUserId(userId) {
    if (mongoDb) return mongoDb.collection('progress').deleteOne({ userId });
    fileDb.progress = fileDb.progress.filter((p) => p.userId !== userId);
    persistFile();
    return { deletedCount: 1 };
  },
};
