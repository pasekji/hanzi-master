// ============================================
// MAIN APP
// ============================================
function HanziMasterApp() {
  const [currentView, setCurrentView] = React.useState('home');
  const [progress, setProgress] = React.useState(loadProgress);
  const [selectedLesson, setSelectedLesson] = React.useState(null);
  const [selectedQueue, setSelectedQueue] = React.useState(null);
  const [language, setLanguage] = React.useState(loadLanguage);
  const [soundEnabled, setSoundEnabled] = React.useState(loadSoundEnabled);
  const [ambienceEnabled, setAmbienceEnabled] = React.useState(loadAmbienceEnabled);

  React.useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  React.useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0 });
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    resetScroll();
    const frame = requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 80);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [currentView]);

  React.useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch (e) {
      console.warn('Failed to save language:', e);
    }
  }, [language]);

  React.useEffect(() => {
    saveSoundEnabled(soundEnabled);
  }, [soundEnabled]);

  React.useEffect(() => {
    saveAmbienceEnabled(ambienceEnabled);
    if (!ambienceEnabled) {
      stopAmbienceLoop();
      return undefined;
    }
    startAmbienceLoop();
    const unlockAmbience = () => startAmbienceLoop();
    window.addEventListener('pointerdown', unlockAmbience, { once: true });
    window.addEventListener('keydown', unlockAmbience, { once: true });
    return () => {
      window.removeEventListener('pointerdown', unlockAmbience);
      window.removeEventListener('keydown', unlockAmbience);
    };
  }, [ambienceEnabled]);

  React.useEffect(() => () => stopAmbienceLoop(), []);

  React.useEffect(() => {
    const today = new Date().toDateString();
    if (progress.lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = progress.lastStudyDate === yesterday.toDateString();
      setProgress(prev => ({
        ...prev,
        lastStudyDate: today,
        streakDays: wasYesterday ? prev.streakDays + 1 : (prev.lastStudyDate ? 1 : 1),
      }));
    }
  }, []);

  const updateProgress = React.useCallback((updates) => {
    setProgress(prev => ({ ...prev, ...updates }));
  }, []);

  const markCharacterLearned = React.useCallback((hanzi) => {
    setProgress(prev => {
      if (prev.learningChars.includes(hanzi)) return { ...prev, totalReviews: prev.totalReviews + 1 };
      return { ...prev, learningChars: [...prev.learningChars, hanzi], totalReviews: prev.totalReviews + 1 };
    });
  }, []);

  const markCharacterMastered = React.useCallback((hanzi) => {
    setProgress(prev => {
      if (prev.masteredChars.includes(hanzi)) return prev;
      return {
        ...prev,
        masteredChars: [...prev.masteredChars, hanzi],
        learningChars: prev.learningChars.filter(h => h !== hanzi)
      };
    });
  }, []);

  const t = React.useCallback((key, vars) => translateUi(language, key, vars), [language]);
  const playSound = React.useCallback((name) => playSoundEffect(name, soundEnabled), [soundEnabled]);
  const setCurrentViewWithSound = React.useCallback((view) => {
    if (typeof view !== 'function') {
      if (view !== currentView) playSoundEffect('tap', soundEnabled);
      setCurrentView(view);
      return;
    }
    setCurrentView(prev => view(prev));
  }, [currentView, soundEnabled]);
  const viewProps = { progress, setCurrentView: setCurrentViewWithSound, selectedLesson, setSelectedLesson, selectedQueue, setSelectedQueue, updateProgress, markCharacterLearned, markCharacterMastered, language, setLanguage, soundEnabled, setSoundEnabled, ambienceEnabled, setAmbienceEnabled, playSound, t };

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
      <BottomNav currentView={currentView} setCurrentView={setCurrentViewWithSound} setSelectedLesson={setSelectedLesson} setSelectedQueue={setSelectedQueue} t={t} />
    </div>
  );
}
