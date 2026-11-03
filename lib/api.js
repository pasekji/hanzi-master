// Privacy-first API: anonymous accounts (userId + recovery code), progress
// sync, GDPR-style export and account deletion. No emails, no names, no
// analytics, no IP logging — rate-limit keys are hashed in memory only.
import { Router, json } from 'express';
import { users, sessions, progressStore, dbHealth, dbKind } from './db.js';
import {
  newUserId, newRecoveryCode, newSessionToken, hashToken,
  hashRecoveryCode, verifyRecoveryCode, rateLimit, hashKey,
  SESSION_COOKIE, SESSION_TTL_MS, parseCookies, setSessionCookie, clearSessionCookie,
} from './auth.js';

const isStrArray = (v, max) => Array.isArray(v) && v.length <= max && v.every((x) => typeof x === 'string' && x.length > 0 && x.length <= 64);
const isPlainObj = (v, maxKeys) => v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length <= maxKeys;

const isValidProgress = (p) => Boolean(
  p && typeof p === 'object'
  && isStrArray(p.masteredChars, 5000)
  && isStrArray(p.learningChars, 5000)
  && Array.isArray(p.quizScores) && p.quizScores.length <= 2000
  && typeof p.totalReviews === 'number' && p.totalReviews >= 0 && p.totalReviews < 1e9
  && typeof p.streakDays === 'number' && p.streakDays >= 0 && p.streakDays < 1e6
  && (p.lastStudyDate === null || typeof p.lastStudyDate === 'string')
  && isPlainObj(p.drawingAttempts, 5000)
  && isPlainObj(p.lastPositions, 5000),
);

export function createApiRouter() {
  const router = Router();
  router.use(json({ limit: '256kb' }));

  // JSON parse errors should not leak stack traces.
  router.use((err, req, res, next) => {
    if (err?.type === 'entity.parse.failed' || err?.type === 'entity.too.large') {
      return res.status(400).json({ error: 'invalid_body' });
    }
    next(err);
  });

  const authLimit = (req, res, next) => {
    // Hash of the IP only, kept in memory, never logged or persisted.
    const key = hashKey(req.ip || 'unknown');
    if (!rateLimit(key, 20, 10 * 60 * 1000)) {
      return res.status(429).json({ error: 'too_many_requests' });
    }
    next();
  };

  const currentSession = async (req) => {
    const token = parseCookies(req)[SESSION_COOKIE];
    if (!token) return null;
    const tokenHash = hashToken(token);
    const session = await sessions.findByTokenHash(tokenHash);
    if (!session || session.expiresAt < Date.now()) return null;
    // Sliding expiration: extend on activity.
    const expiresAt = Date.now() + SESSION_TTL_MS;
    await sessions.extend(tokenHash, expiresAt);
    return { userId: session.userId, token, expiresAt };
  };

  const requireSession = async (req, res, next) => {
    try {
      const session = await currentSession(req);
      if (!session) return res.status(401).json({ error: 'not_authenticated' });
      req.session = session;
      next();
    } catch (err) {
      console.error('API error:', err.message);
      res.status(500).json({ error: 'server_error' });
    }
  };

  const issueSession = async (res, req, userId) => {
    const token = newSessionToken();
    const expiresAt = Date.now() + SESSION_TTL_MS;
    await sessions.create({ tokenHash: hashToken(token), userId, createdAt: Date.now(), expiresAt });
    setSessionCookie(res, req, token);
  };

  router.get('/health', async (req, res) => {
    try {
      await dbHealth();
      res.json({ ok: true, db: dbKind() });
    } catch {
      res.status(503).json({ ok: false, db: dbKind() });
    }
  });

  router.post('/auth/register', authLimit, async (req, res) => {
    try {
      const userId = newUserId();
      const recoveryCode = newRecoveryCode();
      await users.create({
        userId,
        recoveryHash: hashRecoveryCode(recoveryCode),
        createdAt: Date.now(),
      });
      await issueSession(res, req, userId);
      // The plaintext recovery code is returned exactly once.
      res.status(201).json({ userId, recoveryCode });
    } catch (err) {
      console.error('register error:', err.message);
      res.status(500).json({ error: 'server_error' });
    }
  });

  router.post('/auth/login', authLimit, async (req, res) => {
    try {
      const { userId, recoveryCode } = req.body || {};
      if (typeof userId !== 'string' || typeof recoveryCode !== 'string') {
        return res.status(400).json({ error: 'invalid_body' });
      }
      const user = await users.findByUserId(userId.trim());
      if (!user || !verifyRecoveryCode(recoveryCode, user.recoveryHash)) {
        return res.status(401).json({ error: 'invalid_credentials' });
      }
      await issueSession(res, req, user.userId);
      res.json({ userId: user.userId });
    } catch (err) {
      console.error('login error:', err.message);
      res.status(500).json({ error: 'server_error' });
    }
  });

  router.post('/auth/logout', async (req, res) => {
    try {
      const token = parseCookies(req)[SESSION_COOKIE];
      if (token) await sessions.deleteByTokenHash(hashToken(token));
      clearSessionCookie(res);
      res.json({ ok: true });
    } catch (err) {
      console.error('logout error:', err.message);
      res.status(500).json({ error: 'server_error' });
    }
  });

  router.get('/auth/me', requireSession, (req, res) => {
    res.json({ userId: req.session.userId });
  });

  router.get('/progress', requireSession, async (req, res) => {
    const doc = await progressStore.get(req.session.userId);
    res.json({ progress: doc?.data || null, updatedAt: doc?.updatedAt || null });
  });

  router.put('/progress', requireSession, async (req, res) => {
    const progress = req.body?.progress;
    if (!isValidProgress(progress)) {
      return res.status(400).json({ error: 'invalid_progress' });
    }
    const updatedAt = Date.now();
    await progressStore.put(req.session.userId, progress, updatedAt);
    res.json({ ok: true, updatedAt });
  });

  router.get('/account/export', requireSession, async (req, res) => {
    const doc = await progressStore.get(req.session.userId);
    const payload = {
      appName: 'hanzi-master',
      version: 1,
      exportDate: new Date().toISOString(),
      userId: req.session.userId,
      progress: doc?.data || null,
    };
    res.setHeader('Content-Disposition', 'attachment; filename="hanzi-master-export.json"');
    res.json(payload);
  });

  router.delete('/account', requireSession, async (req, res) => {
    try {
      const userId = req.session.userId;
      await progressStore.deleteByUserId(userId);
      await sessions.deleteByUserId(userId);
      await users.deleteByUserId(userId);
      clearSessionCookie(res);
      res.json({ ok: true });
    } catch (err) {
      console.error('delete account error:', err.message);
      res.status(500).json({ error: 'server_error' });
    }
  });

  return router;
}
