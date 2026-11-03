// Auth primitives for anonymous accounts: no email, no password — just a
// random userId plus a one-time recovery code. Only hashes are stored.
// Rate limiting keys are hashed so no plaintext IP is ever kept or logged.
import crypto from 'node:crypto';

// Unambiguous alphabet (no I, L, O, 0, 1) for human-readable codes.
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

export const newUserId = () => crypto.randomBytes(12).toString('base64url');

export const newRecoveryCode = () => {
  const raw = Array.from(crypto.randomBytes(16), (b) => ALPHABET[b % ALPHABET.length]);
  return raw.join('').replace(/(.{4})/g, '$1-').replace(/-$/, '');
};

export const newSessionToken = () => crypto.randomBytes(32).toString('base64url');

export const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');

const normalizeCode = (code) => String(code || '').toUpperCase().replace(/[\s-]/g, '');

export const hashRecoveryCode = (code) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(normalizeCode(code), salt, 64).toString('hex');
  return `${salt}:${hash}`;
};

export const verifyRecoveryCode = (code, stored) => {
  try {
    const [salt, hash] = String(stored || '').split(':');
    if (!salt || !hash) return false;
    const candidate = crypto.scryptSync(normalizeCode(code), salt, 64);
    const expected = Buffer.from(hash, 'hex');
    return candidate.length === expected.length && crypto.timingSafeEqual(candidate, expected);
  } catch {
    return false;
  }
};

// Sliding-window in-memory limiter. Keys should be pre-hashed by the caller.
const buckets = new Map();

export const rateLimit = (key, max, windowMs) => {
  const now = Date.now();
  const entry = buckets.get(key) || [];
  const recent = entry.filter((ts) => now - ts < windowMs);
  if (recent.length >= max) {
    buckets.set(key, recent);
    return false;
  }
  recent.push(now);
  buckets.set(key, recent);
  return true;
};

export const hashKey = (value) => crypto.createHash('sha256').update(String(value)).digest('hex').slice(0, 24);

export const SESSION_COOKIE = 'hm_session';
export const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export const parseCookies = (req) => {
  const header = req.headers.cookie || '';
  const out = {};
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    out[part.slice(0, idx).trim()] = decodeURIComponent(part.slice(idx + 1).trim());
  }
  return out;
};

export const setSessionCookie = (res, req, token) => {
  const secure = req.secure || req.headers['x-forwarded-proto'] === 'https';
  const parts = [
    `${SESSION_COOKIE}=${encodeURIComponent(token)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    `Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`,
  ];
  if (secure) parts.push('Secure');
  res.setHeader('Set-Cookie', parts.join('; '));
};

export const clearSessionCookie = (res) => {
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`);
};
