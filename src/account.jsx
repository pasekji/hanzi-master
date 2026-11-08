// ============================================
// ACCOUNT & PROGRESS SYNC (privacy-first)
// Anonymous accounts: userId + one-time recovery code. No email, no
// password. The server stores only the learning progress document.
// ============================================
const apiFetch = (path, options = {}) => fetch(path, {
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  ...options,
});

const checkSession = async () => {
  try {
    const res = await apiFetch('/api/auth/me');
    if (res.ok) return await res.json();
  } catch (e) {
    // Offline copy or logged out — stay local-only.
  }
  return null;
};

const registerAccount = async () => {
  const res = await apiFetch('/api/auth/register', { method: 'POST', body: '{}' });
  if (!res.ok) throw new Error('register_failed');
  return res.json();
};

const loginAccount = async (userId, recoveryCode) => {
  const res = await apiFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ userId, recoveryCode }),
  });
  if (res.status === 401) throw new Error('invalid_credentials');
  if (!res.ok) throw new Error('login_failed');
  return res.json();
};

const logoutAccount = async () => {
  try {
    await apiFetch('/api/auth/logout', { method: 'POST' });
  } catch (e) {
    // Best effort — the local copy stays anyway.
  }
};

const deleteAccount = async () => {
  const res = await apiFetch('/api/account', { method: 'DELETE' });
  if (!res.ok) throw new Error('delete_failed');
  return res.json();
};

const fetchServerProgress = async () => {
  const res = await apiFetch('/api/progress');
  if (!res.ok) throw new Error('fetch_failed');
  return res.json();
};

const pushProgressToServer = async (progress) => {
  const res = await apiFetch('/api/progress', {
    method: 'PUT',
    body: JSON.stringify({ progress }),
  });
  if (!res.ok) throw new Error('push_failed');
  return res.json();
};

// Merge local and server progress so neither device loses data.
const mergeProgress = (local, remote) => {
  if (!remote) return local;
  const union = (a, b) => Array.from(new Set([...(a || []), ...(b || [])]));
  const masteredChars = union(local.masteredChars, remote.masteredChars);
  const learningChars = union(local.learningChars, remote.learningChars)
    .filter((h) => !masteredChars.includes(h));
  const mergeNumMap = (a, b) => {
    const out = { ...(a || {}) };
    Object.entries(b || {}).forEach(([k, v]) => { out[k] = Math.max(out[k] || 0, v); });
    return out;
  };
  const seenScores = new Set();
  const quizScores = [...(local.quizScores || []), ...(remote.quizScores || [])]
    .filter((q) => {
      const key = `${q.date}|${q.score}|${q.total}`;
      if (seenScores.has(key)) return false;
      seenScores.add(key);
      return true;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 200);
  const lastStudyDate = [local.lastStudyDate, remote.lastStudyDate]
    .filter(Boolean)
    .sort()
    .pop() || null;
  return {
    masteredChars,
    learningChars,
    quizScores,
    totalReviews: Math.max(local.totalReviews || 0, remote.totalReviews || 0),
    streakDays: Math.max(local.streakDays || 0, remote.streakDays || 0),
    lastStudyDate,
    drawingAttempts: mergeNumMap(local.drawingAttempts, remote.drawingAttempts),
    lastPositions: { ...(local.lastPositions || {}), ...(remote.lastPositions || {}) },
    theme: remote.theme || local.theme || null,
  };
};

function AccountSection({ session, syncState, lastSyncAt, account, t, playSound }) {
  const [mode, setMode] = React.useState('create');
  const [busy, setBusy] = React.useState(false);
  const [errorKey, setErrorKey] = React.useState(null);
  const [created, setCreated] = React.useState(null);
  const [loginId, setLoginId] = React.useState('');
  const [loginCode, setLoginCode] = React.useState('');

  const run = async (fn, errorFallback = 'account.error') => {
    setBusy(true);
    setErrorKey(null);
    try {
      return await fn();
    } catch (e) {
      setErrorKey(e.message === 'invalid_credentials' ? 'account.invalidCredentials' : errorFallback);
      return null;
    } finally {
      setBusy(false);
    }
  };

  const handleGenerate = () => run(async () => {
    const data = await account.register();
    setCreated(data);
    playSound?.('reveal');
    return data;
  });

  const handleLogin = () => run(async () => {
    const data = await account.login(loginId.trim(), loginCode.trim());
    if (data) {
      playSound?.('select');
      setLoginId('');
      setLoginCode('');
    }
    return data;
  });

  const handleLogout = () => run(async () => {
    await account.logout();
    playSound?.('tap');
  }, 'account.error');

  const handleDelete = () => {
    if (!window.confirm(t('account.confirmDelete'))) return;
    run(async () => {
      await account.delete();
      playSound?.('tap');
    });
  };

  const syncLabel = syncState === 'syncing'
    ? t('account.syncing')
    : syncState === 'error'
      ? t('account.syncError')
      : lastSyncAt
        ? t('account.lastSync', { time: new Date(lastSyncAt).toLocaleTimeString() })
        : t('account.neverSynced');

  return (
    <div className="card account-card">
      {!session ? (
        <>
          <p className="text-sm" style={{ color: 'var(--text-secondary, #687870)' }}>{t('account.privacy')}</p>
          <div className="account-tabs">
            <button
              className={`account-tab ${mode === 'create' ? 'active' : ''}`}
              onClick={() => { setMode('create'); setCreated(null); setErrorKey(null); }}
            >
              {t('account.createTab')}
            </button>
            <button
              className={`account-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => { setMode('login'); setCreated(null); setErrorKey(null); }}
            >
              {t('account.loginTab')}
            </button>
          </div>

          {mode === 'create' && !created && (
            <>
              <p className="text-sm" style={{ marginTop: '10px' }}>{t('account.createHint')}</p>
              <button className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }} onClick={handleGenerate} disabled={busy}>
                {t('account.generate')}
              </button>
            </>
          )}

          {mode === 'create' && created && (
            <div className="recovery-box">
              <p className="title-sm">{t('account.userId')}</p>
              <code className="recovery-code">{created.userId}</code>
              <p className="title-sm" style={{ marginTop: '10px' }}>{t('account.recoveryCode')}</p>
              <code className="recovery-code big">{created.recoveryCode}</code>
              <p className="text-sm" style={{ color: '#c2410c', marginTop: '8px', fontWeight: 700 }}>{t('account.saveWarning')}</p>
              <button className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }} onClick={() => { setCreated(null); }}>
                {t('account.saved')}
              </button>
            </div>
          )}

          {mode === 'login' && (
            <>
              <p className="text-sm" style={{ marginTop: '10px' }}>{t('account.loginHint')}</p>
              <input
                className="account-input"
                placeholder={t('account.loginId')}
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
              />
              <input
                className="account-input"
                placeholder={t('account.loginCode')}
                value={loginCode}
                onChange={(e) => setLoginCode(e.target.value)}
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
              />
              <button className="btn btn-primary" style={{ marginTop: '12px', width: '100%' }} onClick={handleLogin} disabled={busy || !loginId || !loginCode}>
                {t('account.signIn')}
              </button>
            </>
          )}

          {errorKey && <p className="text-sm" style={{ color: '#c2410c', marginTop: '10px', fontWeight: 700 }}>{t(errorKey)}</p>}
        </>
      ) : (
        <>
          <div className="account-row">
            <div>
              <p className="title-sm">{t('account.loggedInAs')}</p>
              <code className="recovery-code">{session.userId}</code>
            </div>
            <span className={`sync-pill ${syncState === 'error' ? 'error' : ''}`}>{syncLabel}</span>
          </div>
          <div className="backup-buttons" style={{ marginTop: '12px' }}>
            <button className="btn btn-secondary" onClick={handleLogout} disabled={busy}>{t('account.logout')}</button>
            <button className="btn btn-coral" onClick={handleDelete} disabled={busy}>{t('account.delete')}</button>
          </div>
        </>
      )}
    </div>
  );
}
