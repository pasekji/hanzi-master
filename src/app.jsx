// ============================================
// MAIN APP — clean rewrite
// ============================================
const TUTORIAL_STORAGE_KEY = 'hanzi_master_tutorial_seen';

const isSecretRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.endsWith('/secret')
    || window.location.hash === '#secret'
    || new URLSearchParams(window.location.search).get('view') === 'secret';
};

const loadTutorialSeen = () => {
  try { return localStorage.getItem(TUTORIAL_STORAGE_KEY) === 'true'; } catch { return false; }
};
const saveTutorialSeen = () => {
  try { localStorage.setItem(TUTORIAL_STORAGE_KEY, 'true'); } catch {}
};

function HanziMasterApp() {
  const [currentView, setCurrentView] = React.useState(() => (isSecretRoute() ? 'secret' : 'home'));
  const [progress, setProgress] = React.useState(loadProgress);
  const [selectedLesson, setSelectedLesson] = React.useState(null);
  const [selectedQueue, setSelectedQueue] = React.useState(null);
  const [language, setLanguage] = React.useState(loadLanguage);
  const [soundEnabled, setSoundEnabled] = React.useState(loadSoundEnabled);
  const [ambienceEnabled, setAmbienceEnabled] = React.useState(loadAmbienceEnabled);
  const [tutorialOpen, setTutorialOpen] = React.useState(() => !isSecretRoute() && !loadTutorialSeen());
  const [session, setSession] = React.useState(null);
  const [syncState, setSyncState] = React.useState('idle');
  const [lastSyncAt, setLastSyncAt] = React.useState(null);
  const [theme, setThemeState] = React.useState(() => {
    const saved = loadProgress().theme;
    return isValidTheme(saved) ? saved : loadTheme();
  });
  const [hanziFont, setHanziFontState] = React.useState(() => {
    const saved = loadProgress().hanziFont;
    return isValidHanziFont(saved) ? saved : loadHanziFont();
  });

  React.useEffect(() => { saveProgress(progress); }, [progress]);

  // badge unlock detection
  const [newBadge, setNewBadge] = React.useState(null);
  const knownBadgeIds = React.useRef(new Set(getUnlockedBadgeIds(loadProgress())));
  React.useEffect(() => {
    const ids = new Set(getUnlockedBadgeIds(progress));
    const fresh = BADGES.find((b) => ids.has(b.id) && !knownBadgeIds.current.has(b.id));
    knownBadgeIds.current = ids;
    if (fresh) {
      setNewBadge(fresh);
      playSoundEffect('complete', soundEnabled);
    }
  }, [progress]);
  React.useEffect(() => { applyTheme(theme); }, [theme]);
  React.useEffect(() => { applyHanziFont(hanziFont); }, [hanziFont]);
  React.useEffect(() => {
    try { localStorage.setItem(LANGUAGE_KEY, language); } catch {}
  }, [language]);
  React.useEffect(() => { saveSoundEnabled(soundEnabled); }, [soundEnabled]);
  React.useEffect(() => {
    saveAmbienceEnabled(ambienceEnabled);
    if (!ambienceEnabled) { stopAmbienceLoop(); return; }
    startAmbienceLoop();
    const unlock = () => startAmbienceLoop();
    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('keydown', unlock, { once: true });
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, [ambienceEnabled]);
  React.useEffect(() => () => stopAmbienceLoop(), []);

  // keyboard shortcuts: digits/D/L navigate, ? toggles the guide, Esc goes back.
  // learn/draw/quiz handle their own keys locally in screens.jsx.
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable) return;
      if (currentView === 'secret') return;
      const key = e.key;
      if (tutorialOpen) {
        if (key === 'Escape' || key === '?') { e.preventDefault(); closeTutorial(); }
        return;
      }
      if (key === 'Escape') {
        if (['learn', 'draw', 'quiz'].includes(currentView)) return; // handled inside the view
        if (currentView !== 'home') { e.preventDefault(); setCurrentViewWithSound('home'); }
        return;
      }
      if (key === '?') { e.preventDefault(); openTutorial(); return; }
      if (['learn', 'draw', 'quiz'].includes(currentView)) return;
      const nav = { 1: 'home', 2: 'learn', 3: 'draw', 4: 'quiz', 5: 'stats', d: 'daily', l: 'lessons' }[key.toLowerCase()];
      if (nav) {
        e.preventDefault();
        setSelectedQueue(null);
        if (['learn', 'draw', 'quiz', 'daily'].includes(nav)) setSelectedLesson(null);
        setCurrentViewWithSound(nav);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentView, tutorialOpen, setCurrentViewWithSound, openTutorial, closeTutorial, setSelectedLesson, setSelectedQueue]);

  // streak
  React.useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = progress.lastStudyDate === yesterday.toDateString();
      setProgress(prev => ({
        ...prev,
        lastStudyDate: today,
        streakDays: wasYesterday ? prev.streakDays + 1 : 1,
      }));
    }
  }, []);

  // restore session + merge server progress
  React.useEffect(() => {
    if (window.location.protocol === 'file:') return;
    let cancelled = false;
    (async () => {
      const s = await checkSession();
      if (cancelled || !s) return;
      setSession(s);
      try {
        const remote = await fetchServerProgress();
        if (remote.progress) {
          setProgress(prev => mergeProgress(prev, remote.progress));
          setSyncState('synced');
          setLastSyncAt(remote.updatedAt || Date.now());
        }
      } catch { setSyncState('error'); }
    })();
    return () => { cancelled = true; };
  }, []);

  // debounced progress push while logged in
  React.useEffect(() => {
    if (!session || window.location.protocol === 'file:') return;
    setSyncState('syncing');
    const handle = window.setTimeout(async () => {
      try {
        const res = await pushProgressToServer(progress);
        setLastSyncAt(res.updatedAt);
        setSyncState('synced');
      } catch { setSyncState('error'); }
    }, 1500);
    return () => window.clearTimeout(handle);
  }, [progress, session]);

  const updateProgress = React.useCallback((updates) => setProgress(prev => ({ ...prev, ...updates })), []);
  const markCharacterLearned = React.useCallback((hanzi) => {
    setProgress(prev => prev.learningChars.includes(hanzi)
      ? { ...prev, totalReviews: prev.totalReviews + 1 }
      : { ...prev, learningChars: [...prev.learningChars, hanzi], totalReviews: prev.totalReviews + 1 });
  }, []);
  const markCharacterMastered = React.useCallback((hanzi) => {
    setProgress(prev => prev.masteredChars.includes(hanzi) ? prev : {
      ...prev,
      masteredChars: [...prev.masteredChars, hanzi],
      learningChars: prev.learningChars.filter(h => h !== hanzi),
    });
  }, []);

  const setTheme = React.useCallback((id) => {
    setThemeState(id);
    setProgress(prev => ({ ...prev, theme: isValidTheme(id) ? id : prev.theme }));
  }, []);

  const setHanziFont = React.useCallback((id) => {
    setHanziFontState(id);
    setProgress(prev => ({ ...prev, hanziFont: isValidHanziFont(id) ? id : prev.hanziFont }));
  }, []);

  const t = React.useCallback((key, vars) => translateUi(language, key, vars), [language]);
  const playSound = React.useCallback((name) => playSoundEffect(name, soundEnabled), [soundEnabled]);
  const openTutorial = React.useCallback(() => { playSoundEffect('reveal', soundEnabled); setTutorialOpen(true); }, [soundEnabled]);
  const closeTutorial = React.useCallback(() => { saveTutorialSeen(); playSoundEffect('tap', soundEnabled); setTutorialOpen(false); }, [soundEnabled]);
  const setCurrentViewWithSound = React.useCallback((view) => {
    if (typeof view !== 'function') {
      if (view !== currentView) playSoundEffect('tap', soundEnabled);
      setCurrentView(view);
      return;
    }
    setCurrentView(prev => view(prev));
  }, [currentView, soundEnabled]);

  const account = React.useMemo(() => ({
    register: async () => { const d = await registerAccount(); setSession({ userId: d.userId }); return d; },
    login: async (userId, code) => {
      const d = await loginAccount(userId, code);
      setSession({ userId: d.userId });
      try {
        const remote = await fetchServerProgress();
        if (remote.progress) {
          setProgress(prev => mergeProgress(prev, remote.progress));
          setSyncState('synced');
          setLastSyncAt(remote.updatedAt || Date.now());
        }
      } catch { setSyncState('error'); }
      return d;
    },
    logout: async () => { await logoutAccount(); setSession(null); setSyncState('idle'); setLastSyncAt(null); },
    delete: async () => { await deleteAccount(); setSession(null); setSyncState('idle'); setLastSyncAt(null); },
  }), []);

  const viewProps = {
    progress, setCurrentView: setCurrentViewWithSound, selectedLesson, setSelectedLesson, selectedQueue, setSelectedQueue,
    updateProgress, markCharacterLearned, markCharacterMastered, language, setLanguage, soundEnabled, setSoundEnabled,
    ambienceEnabled, setAmbienceEnabled, playSound, openTutorial, t, session, syncState, lastSyncAt, account, theme, setTheme,
    hanziFont, setHanziFont,
  };

  return (
    <div className="app-container">
      <style>{styles}</style>
      {currentView === 'home' && <HomeView key="home" {...viewProps} />}
      {currentView === 'daily' && <DailyTrainingView key="daily" {...viewProps} />}
      {currentView === 'lessons' && <LessonsView key="lessons" {...viewProps} />}
      {currentView === 'learn' && <LearnView key="learn" {...viewProps} />}
      {currentView === 'draw' && <DrawView key="draw" {...viewProps} />}
      {currentView === 'quiz' && <QuizView key="quiz" {...viewProps} />}
      {currentView === 'stats' && <StatsView key="stats" {...viewProps} />}
      {currentView === 'secret' && <SecretCheatSheetView key="secret" {...viewProps} />}
      <BottomNav currentView={currentView} setCurrentView={setCurrentViewWithSound} setSelectedLesson={setSelectedLesson} setSelectedQueue={setSelectedQueue} t={t} />
      <BadgeToast badge={newBadge} onClose={() => setNewBadge(null)} t={t} />
      <TutorialOverlay
        open={tutorialOpen && currentView !== 'secret'}
        onClose={closeTutorial}
        setCurrentView={setCurrentViewWithSound}
        setSelectedLesson={setSelectedLesson}
        setSelectedQueue={setSelectedQueue}
        playSound={playSound}
        t={t}
      />
    </div>
  );
}
