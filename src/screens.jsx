// ============================================
// DAILY TRAINING VIEW
// ============================================
function DailyTrainingView({ progress, setCurrentView, setSelectedLesson, setSelectedQueue, playSound, t }) {
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const dailySummary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const todayLabel = getTodayKey();
  const openMode = (view) => {
    setSelectedLesson(null);
    setSelectedQueue({
      id: `daily:${todayLabel}`,
      labelKey: 'common.today',
      items: dailyQueue
    });
    playSound('select');
    setCurrentView(view);
  };
  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-lime)' }}>{todayLabel}</span>
      </header>

      <MiniAppHeader
        icon="gift"
        title={t('daily.title')}
        subtitle={t('daily.subtitle')}
        pill={t('daily.count', { count: dailyQueue.length })}
      />

      <div className="daily-training-card">
        <div className="daily-training-hero">
          <PandaBuddySvg />
          <div>
            <p className="daily-training-title">{t('daily.heroTitle')}</p>
            <p className="daily-training-copy">{t('daily.heroCopy')}</p>
          </div>
        </div>
        <div className="daily-queue-grid">
          {dailyQueue.map(char => (
            <div key={char.hanzi} className="daily-queue-char">
              <span className="hanzi-display">{char.hanzi}</span>
              <small>{t(`daily.reason.${char.dailyReason}`)}</small>
            </div>
          ))}
        </div>
        <div className="daily-reason-row">
          <span>{t('daily.reason.new')} {dailySummary.new || 0}</span>
          <span>{t('daily.reason.review')} {dailySummary.review || 0}</span>
          <span>{t('daily.reason.solidify')} {dailySummary.solidify || 0}</span>
        </div>
      </div>

      <div className="daily-step-grid">
        <button className="daily-step-card" onClick={() => openMode('learn')}>
          <span className="daily-step-index">1</span>
          <span className="daily-step-icon"><AppIcon name="card" /></span>
          <strong>{t('daily.step1.title')}</strong>
          <span>{t('daily.step1.copy')}</span>
        </button>
        <button className="daily-step-card primary" onClick={() => openMode('draw')}>
          <span className="daily-step-index">2</span>
          <span className="daily-step-icon"><AppIcon name="brush" /></span>
          <strong>{t('daily.step2.title')}</strong>
          <span>{t('daily.step2.copy')}</span>
        </button>
        <button className="daily-step-card" onClick={() => openMode('quiz')}>
          <span className="daily-step-index">3</span>
          <span className="daily-step-icon"><AppIcon name="target" /></span>
          <strong>{t('daily.step3.title')}</strong>
          <span>{t('daily.step3.copy')}</span>
        </button>
      </div>

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={() => setCurrentView('home')}>{t('daily.doneEnough')}</button>
        <button className="btn btn-primary" onClick={() => openMode('learn')}>{t('daily.start')}</button>
      </div>
    </div>
  );
}

// ============================================
// HOME VIEW
// ============================================
function HomeView({ progress, setCurrentView, setSelectedLesson, setSelectedQueue, language, setLanguage, soundEnabled, setSoundEnabled, ambienceEnabled, setAmbienceEnabled, playSound, openTutorial, t }) {
  const catalogSet = React.useMemo(() => new Set(STUDY_CATALOG.map(item => item.hanzi)), []);
  const masteredCount = React.useMemo(() => new Set(progress.masteredChars.filter(hanzi => catalogSet.has(hanzi))).size, [catalogSet, progress.masteredChars]);
  const learningCount = React.useMemo(() => new Set(progress.learningChars.filter(hanzi => catalogSet.has(hanzi))).size, [catalogSet, progress.learningChars]);
  const totalChars = STUDY_CATALOG.length || VOCABULARY.length;
  const progressPercent = Math.round((masteredCount / totalChars) * 100);
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const dailySummary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const openDailyTraining = () => {
    setSelectedLesson(null);
    setSelectedQueue(null);
    playSound('select');
    setCurrentView('daily');
  };

  const openMaterialWordBank = (view = 'learn') => {
    setSelectedLesson(null);
    setSelectedQueue(getMaterialWordQueue());
    playSound('select');
    setCurrentView(view);
  };

  return (
    <div className="screen home-screen">
      <header className="super-topbar">
        <div className="brand-lockup">
          <div className="brand-mark"><HanziLogoSvg /></div>
          <div>
            <h1 className="brand-title">Hanzi Master</h1>
            <p className="brand-subtitle">{t('home.subtitle')}</p>
          </div>
        </div>
        <div className="topbar-actions">
          <button className="guide-toggle" onClick={openTutorial} aria-label={t('tutorial.open')} title={t('tutorial.open')}>
            <AppIcon name="help" />
          </button>
          <LanguageToggle language={language} setLanguage={setLanguage} playSound={playSound} t={t} />
          <SoundToggle soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} t={t} />
          <AmbienceToggle ambienceEnabled={ambienceEnabled} setAmbienceEnabled={setAmbienceEnabled} t={t} />
          {progress.streakDays > 0 && (
            <div className="daily-chip">🔥 {progress.streakDays}</div>
          )}
        </div>
      </header>

      <div className="super-searchbar">
        <AppIcon name="scan" />
        <strong>{t('home.search')}</strong>
        <span className="super-search-action"><AppIcon name="sound" /></span>
      </div>

      <div className="wallet-card">
        <p className="wallet-label">{t('home.walletLabel')}</p>
        <div className="wallet-brand-mark"><HanziLogoSvg /></div>
        <div className="wallet-score">{progressPercent}%</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="wallet-meta">
          <span>{t('home.masteredMeta', { mastered: masteredCount, total: totalChars })}</span>
          <span>{t('home.learningMeta', { count: learningCount })}</span>
          <div className="wallet-seal">字</div>
        </div>
      </div>

      <div className="daily-entry-card" onClick={openDailyTraining} role="button" tabIndex={0}>
        <div className="daily-entry-main">
          <span className="daily-entry-icon"><AppIcon name="gift" /></span>
          <div>
            <p className="daily-entry-kicker">{t('home.dailyKicker')}</p>
            <p className="daily-entry-title">{t('home.dailyTitle', { count: dailyQueue.length })}</p>
          </div>
        </div>
        <div className="daily-entry-strip">
          {dailyQueue.slice(0, 6).map(char => (
            <span key={char.hanzi} className="daily-entry-char">{char.hanzi}</span>
          ))}
        </div>
        <div className="daily-entry-meta">
          <span>{t('daily.reason.new')} {dailySummary.new || 0}</span>
          <span>{t('daily.reason.review')} {dailySummary.review || 0}</span>
          <span>{t('daily.reason.solidify')} {dailySummary.solidify || 0}</span>
        </div>
      </div>

      <IllustrationStrip setCurrentView={setCurrentView} setSelectedLesson={setSelectedLesson} setSelectedQueue={setSelectedQueue} t={t} />

      <div className="quick-lane">
        <button className="quick-action" onClick={() => { setSelectedQueue(null); setCurrentView('lessons'); }}>
          <span className="quick-action-icon"><AppIcon name="scan" /></span>
          <span className="quick-action-label">{t('tiles.lessons')}</span>
        </button>
        <button className="quick-action" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('learn'); }}>
          <span className="quick-action-icon"><AppIcon name="card" /></span>
          <span className="quick-action-label">{t('tiles.cards')}</span>
        </button>
        <button className="quick-action" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }}>
          <span className="quick-action-icon"><AppIcon name="brush" /></span>
          <span className="quick-action-label">{t('tiles.write')}</span>
        </button>
        <button className="quick-action" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }}>
          <span className="quick-action-icon"><AppIcon name="target" /></span>
          <span className="quick-action-label">{t('tiles.quiz')}</span>
        </button>
      </div>

      <div className="mini-program-panel">
        <div className="mini-program-head">
          <span>{t('home.myMiniPrograms')}</span>
          <span>{t('home.more')}</span>
        </div>
        <div className="mini-program-grid">
          <MiniProgramTile icon="book" label={t('tiles.vocab')} onClick={() => openMaterialWordBank('learn')} />
          <MiniProgramTile icon="brush" label={t('tiles.write')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }} />
          <MiniProgramTile icon="target" label={t('tiles.quiz')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }} />
          <MiniProgramTile icon="scan" label={t('tiles.lessons')} onClick={() => { setSelectedQueue(null); setCurrentView('lessons'); }} />
          <MiniProgramTile icon="sound" label={t('tiles.pinyin')} onClick={() => openMaterialWordBank('quiz')} />
          <MiniProgramTile icon="card" label={t('tiles.cards')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('learn'); }} />
          <MiniProgramTile icon="wallet" label={t('tiles.progress')} onClick={() => { setSelectedQueue(null); setCurrentView('stats'); }} />
          <MiniProgramTile icon="gift" label={t('tiles.review')} onClick={openDailyTraining} />
        </div>
      </div>

      <div className="cute-coach-card">
        <PandaBuddySvg />
        <div>
          <p className="coach-title">{t('home.coachTitle')}</p>
          <p className="coach-copy">{learningCount > 0 ? t('home.coachReview') : t('home.coachNew')}</p>
          <button className="coach-guide-link" onClick={openTutorial}>
            <AppIcon name="help" />
            <span>{t('tutorial.open')}</span>
          </button>
        </div>
      </div>

      <div className="insight-panel">
        <div>
          <p className="insight-title">{t('home.taskTitle')}</p>
          <p className="insight-copy">{learningCount > 0 ? t('home.taskReview') : t('home.taskNew')}</p>
        </div>
        <div className="insight-character">{learningCount > 0 ? '练' : '学'}</div>
      </div>

      <div className="stats-bar home-metrics">
        <div className="stat-item">
          <div className="stat-value">{masteredCount}</div>
          <div className="stat-label">{t('home.stat.mastered')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{learningCount}</div>
          <div className="stat-label">{t('home.stat.learning')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{progress.totalReviews}</div>
          <div className="stat-label">{t('home.stat.reviews')}</div>
        </div>
      </div>

      <div className="section-title">
        <span className="text-sm">{t('home.account')}</span>
        <div className="section-line" />
      </div>

      <div className="card card-clickable account-entry" onClick={() => setCurrentView('stats')} role="button" tabIndex={0}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p className="title-md">{t('home.walletTitle')}</p>
            <p className="text-sm">{t('home.walletCopy')}</p>
          </div>
          <span style={{ fontSize: '28px', color: 'var(--accent-lime)' }}>→</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// LESSONS VIEW
// ============================================
function LessonsView({ setCurrentView, setSelectedLesson, setSelectedQueue, progress, t }) {
  const lessons = [12, 13, 14, 15];
  const lessonTitles = {
    12: { title: '天气', chinese: 'Weather' },
    13: { title: '正在', chinese: 'Actions' },
    14: { title: '买东西', chinese: 'Shopping' },
    15: { title: '是...的', chinese: 'Structure' }
  };
  const materialQueues = getMaterialCollectionQueues();
  const materialGroups = React.useMemo(() => {
    const order = ['HSK1', 'HSK2', 'Basics', 'Book3'];
    const groups = new Map();
    materialQueues.forEach(queue => {
      const level = queue.level || 'Material';
      if (!groups.has(level)) groups.set(level, []);
      groups.get(level).push(queue);
    });
    return Array.from(groups.entries())
      .map(([level, queues]) => ({
        level,
        queues,
        cards: queues.reduce((total, queue) => total + (queue.items?.length || 0), 0),
      }))
      .sort((a, b) => {
        const ai = order.includes(a.level) ? order.indexOf(a.level) : order.length;
        const bi = order.includes(b.level) ? order.indexOf(b.level) : order.length;
        return ai - bi || a.level.localeCompare(b.level);
      });
  }, [materialQueues]);
  const materialCardCount = materialQueues.reduce((total, queue) => total + (queue.items?.length || 0), 0);

  const getLessonProgress = (num) => {
    const chars = VOCABULARY.filter(v => v.lesson === num);
    const mastered = chars.filter(v => progress.masteredChars.includes(v.hanzi)).length;
    return { mastered, total: chars.length, percent: Math.round((mastered / chars.length) * 100) };
  };
  const getQueueProgress = (queue) => {
    const items = queue.items || [];
    const mastered = items.filter(v => progress.masteredChars.includes(v.hanzi)).length;
    return { mastered, total: items.length, percent: items.length ? Math.round((mastered / items.length) * 100) : 0 };
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <HeaderLogoMark />
      </header>

      <MiniAppHeader
        icon="scan"
        title={t('lessons.title')}
        subtitle={t('lessons.subtitle')}
        pill={t('lessons.pill')}
      />

      <div className="service-section">
        <div className="service-section-head">
          <span>{t('lessons.service')}</span>
          <span>HSK1</span>
        </div>
        <div className="service-list">
        {lessons.map((num) => {
          const { mastered, total, percent } = getLessonProgress(num);
          return (
            <div key={num} className="card card-clickable service-row" onClick={() => { setSelectedQueue(null); setSelectedLesson(num); setCurrentView('learn'); }} role="button" tabIndex={0}>
              <div className="lesson-card">
                <div className="lesson-service-icon"><AppIcon name={num === 12 ? 'sound' : num === 13 ? 'brush' : num === 14 ? 'wallet' : 'book'} /></div>
                <div className="lesson-number">{num}</div>
                <div className="lesson-info">
                  <div className="lesson-title-line">
                    <p className="title-md">{lessonTitles[num].title}</p>
                    <span className="lesson-chinese-chip">{lessonTitles[num].chinese}</span>
                  </div>
                  <p className="text-sm">{mastered}/{total} • {percent}%</p>
                  <div className="progress-bar" style={{ marginTop: '8px', marginBottom: '0' }}>
                    <div className="progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {materialQueues.length > 0 && (
        <div className="service-section">
          <div className="service-section-head">
            <span>{t('lessons.materialBanks')}</span>
            <span>{materialQueues.length} • {materialCardCount}</span>
          </div>
          <div className="service-list">
            {materialGroups.map((group) => (
              <div className="material-group" key={group.level}>
                <div className="material-group-head">
                  <span>{getMaterialLevelLabel(group.level)}</span>
                  <span>{group.queues.length} • {group.cards}</span>
                </div>
                {group.queues.map((queue) => {
                  const queueProgress = getQueueProgress(queue);
                  return (
                    <div
                      key={queue.id}
                      className="card card-clickable service-row"
                      onClick={() => { setSelectedLesson(null); setSelectedQueue(queue); setCurrentView('learn'); }}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="lesson-card">
                        <div className="lesson-service-icon"><AppIcon name={queue.level === 'Book3' ? 'scan' : queue.level === 'Basics' ? 'brush' : 'book'} /></div>
                        <div className="lesson-number">{queueProgress.total}</div>
                        <div className="lesson-info">
                          <div className="lesson-title-line">
                            <p className="title-md">{getQueueDisplayLabel(queue, t)}</p>
                            <span className="lesson-chinese-chip">{getQueueDisplayChip(queue, t)}</span>
                          </div>
                          <p className="text-sm">{queueProgress.mastered}/{queueProgress.total} • {queueProgress.percent}%</p>
                          <div className="progress-bar" style={{ marginTop: '8px', marginBottom: '0' }}>
                            <div className="progress-fill" style={{ width: `${queueProgress.percent}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="section-title">
        <span className="text-sm">{t('lessons.quick')}</span>
        <div className="section-line" />
      </div>

      <div className="lessons-quick-actions" style={{ display: 'flex', gap: '12px' }}>
        <button className="btn btn-secondary" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }}>{t('lessons.quizAll')}</button>
        <button className="btn btn-primary" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }}>{t('lessons.drawAll')}</button>
      </div>
    </div>
  );
}

// ============================================
// LEARN VIEW
// ============================================
function LearnView({ selectedLesson, selectedQueue, progress, markCharacterLearned, updateProgress, setCurrentView, playSound, t }) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY), [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getStudyQueue(baseVocab, progress));
  const positionKey = `learn:${selectedQueue?.id || selectedLesson || 'all'}`;
  const scopePill = selectedQueue ? getQueueDisplayLabel(selectedQueue, t) : (selectedLesson ? `L${selectedLesson}` : t('common.all'));
  const [currentIndex, setCurrentIndex] = React.useState(() => Math.min(progress.lastPositions?.[positionKey] || 0, Math.max(vocab.length - 1, 0)));
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showCompound, setShowCompound] = React.useState(false);

  const currentChar = vocab[currentIndex];
  const isWordItem = currentChar.kind === 'word';
  const relatedCompounds = React.useMemo(() => (
    isWordItem ? [] : COMPOUNDS.filter(c => c.hanzi.includes(currentChar.hanzi))
  ), [currentChar, isWordItem]);

  const handleNext = () => {
    playSound(currentIndex === vocab.length - 1 ? 'complete' : 'tap');
    markCharacterLearned(currentChar.hanzi);
    setIsFlipped(false);
    setShowCompound(false);
    if (currentIndex < vocab.length - 1) {
      const nextIndex = currentIndex + 1;
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: nextIndex } });
      setCurrentIndex(nextIndex);
    } else {
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: 0 } });
    }
  };

  const handlePrev = () => {
    playSound('tap');
    setIsFlipped(false);
    setShowCompound(false);
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: prevIndex } });
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-lime)' }}>{t('learn.cardNumber', { count: currentIndex + 1 })}</span>
      </header>

      <MiniAppHeader
        icon="card"
        title={t('learn.title')}
        subtitle={t('learn.subtitle')}
        pill={scopePill}
      />

      <div className="mini-app-progress-card">
        <p className="text-sm">{t('learn.progress')}</p>
        <span className="mini-app-progress-count">{currentIndex + 1} / {vocab.length}</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((currentIndex + 1) / vocab.length) * 100}%` }} />
      </div>

      <div className="study-pass-card card card-accent-lime flashcard" onClick={() => { playSound('select'); setIsFlipped(!isFlipped); }} role="button" tabIndex={0} aria-label="Flip card">
        <div className={`hanzi-display hanzi-hero ${isWordItem ? 'hanzi-word' : ''}`} style={{ color: 'var(--accent-lime)' }}>{currentChar.hanzi}</div>
        {isFlipped && (
          <div className="animate-slide-up" style={{ textAlign: 'center' }}>
            <div className="pinyin-display">{currentChar.pinyin}</div>
            <div className="meaning-display">{currentChar.meaning}</div>
            <p className="text-sm" style={{ marginTop: '12px' }}>
              {isWordItem
                ? t('learn.wordLine', { source: currentChar.source || 'HSK1' })
                : t('learn.strokesLine', { strokes: currentChar.strokes, lesson: currentChar.lesson })}
            </p>
            {currentChar.example && (
              <p className="material-example">{currentChar.example}</p>
            )}
          </div>
        )}
        {!isFlipped && <p className="flashcard-hint">{t('learn.tap')}</p>}
      </div>

      {relatedCompounds.length > 0 && (
        <div className="related-service-card card card-clickable" onClick={() => { playSound('reveal'); setShowCompound(!showCompound); }} role="button" tabIndex={0}>
          <p className="title-md">{t('learn.related', { count: relatedCompounds.length })}</p>
          {showCompound && (
            <div className="animate-slide-up" style={{ marginTop: '12px' }}>
              {relatedCompounds.map((c, i) => (
                <div key={i} style={{ padding: '8px 0', borderBottom: i < relatedCompounds.length - 1 ? '1px solid #dce7e2' : 'none' }}>
                  <span className="hanzi-display hanzi-md">{c.hanzi}</span>
                  <span style={{ marginLeft: '12px', color: 'var(--accent-cyan)' }}>{c.pinyin}</span>
                  <span style={{ marginLeft: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>{c.meaning}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentIndex === 0}>{t('common.prevCard')}</button>
        <button className="btn btn-primary" onClick={handleNext}>{currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextCard')}</button>
      </div>

      {currentIndex === vocab.length - 1 && isFlipped && (
        <div className="floating-indicator">
          <span style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif", fontSize: '15px', fontWeight: 900 }}>{t('learn.roundDone')}</span>
        </div>
      )}
    </div>
  );
}

// ============================================
// DRAW VIEW
// ============================================
function DrawView({ selectedLesson, selectedQueue, progress, updateProgress, markCharacterMastered, setCurrentView, playSound, t }) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY), [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getDrawQueue(baseVocab, progress));
  const positionKey = `draw:${selectedQueue?.id || selectedLesson || 'all'}`;
  const scopePill = selectedQueue ? getQueueDisplayLabel(selectedQueue, t) : (selectedLesson ? `L${selectedLesson}` : t('common.all'));
  const [currentIndex, setCurrentIndex] = React.useState(() => Math.min(progress.lastPositions?.[positionKey] || 0, Math.max(vocab.length - 1, 0)));
  const [drawMode, setDrawMode] = React.useState('practice'); // learn, practice, quiz
  const [showReference, setShowReference] = React.useState(false);
  const [strokesCompleted, setStrokesCompleted] = React.useState(0);
  const [totalStrokes, setTotalStrokes] = React.useState(0);
  const [mistakes, setMistakes] = React.useState(0);
  const mistakesRef = React.useRef(0);
  const [feedback, setFeedback] = React.useState(null); // { type: 'success' | 'error', message }
  const [isComplete, setIsComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [charStats, setCharStats] = React.useState({ completed: 0, totalMistakes: 0 });

  const writerRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const currentChar = vocab[currentIndex];

  // Initialize Hanzi Writer
  React.useEffect(() => {
    if (!containerRef.current || !currentChar) return;

    // Clear previous
    if (writerRef.current) {
      writerRef.current = null;
    }
    containerRef.current.innerHTML = '';

    // Reset state
    setStrokesCompleted(0);
    setMistakes(0);
    mistakesRef.current = 0;
    setFeedback(null);
    setIsComplete(false);
    setIsLoading(true);

    // Calculate size based on container
    const containerWidth = containerRef.current.parentElement.offsetWidth - 20;
    const size = Math.min(containerWidth, 320);

    try {
      const writer = HanziWriter.create(containerRef.current, currentChar.hanzi, {
        width: size,
        height: size,
        padding: 10,
        showOutline: drawMode === 'learn' || showReference,
        showCharacter: drawMode === 'learn' || showReference,
        strokeColor: '#07c160',
        outlineColor: '#dce7e2',
        drawingColor: '#07c160',
        highlightColor: '#1677ff',
        radicalColor: '#07c160',
        strokeAnimationSpeed: 1,
        delayBetweenStrokes: 300,
        drawingWidth: 6,
        showHintAfterMisses: drawMode === 'practice' ? 2 : 3,
        highlightOnComplete: true,
        charDataLoader: (char, onComplete) => {
          const strokeData = window.HANZI_STROKE_DATA?.[char];
          if (strokeData) {
            onComplete(strokeData);
          } else {
            setFeedback({ type: 'error', message: t('draw.feedback.noData') });
          }
        }
      });

      writerRef.current = writer;

      // Get stroke count
      const strokeData = window.HANZI_STROKE_DATA?.[currentChar.hanzi];
      setTotalStrokes(strokeData?.strokes?.length || currentChar.strokes);
      setIsLoading(false);

      // Start based on mode
      if (drawMode === 'learn') {
        // Just show the character, user can click animate
      } else {
        // Start quiz mode for practice and quiz
        setTimeout(() => {
          writer.quiz({
            onCorrectStroke: (data) => {
              playSound('stroke');
              setStrokesCompleted(data.strokeNum + 1);
              if (data.strokeNum === 0) {
                setFeedback({ type: 'success', message: t('draw.feedback.start') });
              }
              setTimeout(() => setFeedback(null), 800);
            },
            onMistake: (data) => {
              playSound('wrong');
              mistakesRef.current += 1;
              setMistakes(prev => prev + 1);
              setFeedback({ type: 'error', message: t('draw.feedback.retry') });
              setTimeout(() => setFeedback(null), 800);
            },
            onComplete: (data) => {
              playSound('complete');
              setIsComplete(true);
              const finalMistakes = mistakesRef.current;
              setCharStats(prev => ({
                completed: prev.completed + 1,
                totalMistakes: prev.totalMistakes + finalMistakes
              }));
              if (finalMistakes === 0) {
                setFeedback({ type: 'success', message: t('draw.feedback.perfect') });
                markCharacterMastered(currentChar.hanzi);
              } else if (finalMistakes <= 2) {
                setFeedback({ type: 'success', message: t('draw.feedback.good') });
              } else {
                setFeedback({ type: 'success', message: t('draw.feedback.done') });
              }
            }
          });
        }, 300);
      }
    } catch (err) {
      console.warn('Hanzi Writer init error:', err);
    }

    return () => {
      if (writerRef.current) {
        writerRef.current = null;
      }
    };
  }, [currentChar, drawMode, showReference, playSound, t]);

  const handleAnimate = () => {
    if (writerRef.current) {
      playSound('reveal');
      writerRef.current.animateCharacter();
    }
  };

  const handleReset = () => {
    playSound('tap');
    setStrokesCompleted(0);
    setMistakes(0);
    mistakesRef.current = 0;
    setFeedback(null);
    setIsComplete(false);

    if (writerRef.current) {
      if (drawMode === 'learn') {
        writerRef.current.showCharacter();
      } else {
        writerRef.current.quiz({
          onCorrectStroke: (data) => {
            playSound('stroke');
            setStrokesCompleted(data.strokeNum + 1);
            setFeedback({ type: 'success', message: t('draw.feedback.nice') });
            setTimeout(() => setFeedback(null), 600);
          },
          onMistake: () => {
            playSound('wrong');
            mistakesRef.current += 1;
            setMistakes(prev => prev + 1);
            setFeedback({ type: 'error', message: t('draw.feedback.retry') });
            setTimeout(() => setFeedback(null), 600);
          },
          onComplete: () => {
            playSound('complete');
            setIsComplete(true);
            const finalMistakes = mistakesRef.current;
            setCharStats(prev => ({
              completed: prev.completed + 1,
              totalMistakes: prev.totalMistakes + finalMistakes
            }));
            setFeedback({ type: 'success', message: finalMistakes === 0 ? t('draw.feedback.perfect') : t('draw.feedback.done') });
          }
        });
      }
    }
  };

  const handleNext = () => {
    playSound(currentIndex < vocab.length - 1 ? 'tap' : 'complete');
    const nextIndex = currentIndex < vocab.length - 1 ? currentIndex + 1 : 0;
    updateProgress({
      drawingAttempts: {
        ...progress.drawingAttempts,
        [currentChar.hanzi]: (progress.drawingAttempts[currentChar.hanzi] || 0) + 1
      },
      lastPositions: { ...(progress.lastPositions || {}), [positionKey]: nextIndex }
    });
    if (currentIndex < vocab.length - 1) {
      setCurrentIndex(nextIndex);
    } else {
      // Last character - go back to home
      setCurrentView('home');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      playSound('tap');
      const prevIndex = currentIndex - 1;
      updateProgress({ lastPositions: { ...(progress.lastPositions || {}), [positionKey]: prevIndex } });
      setCurrentIndex(prevIndex);
    }
  };

  const selectDrawMode = (mode) => {
    if (mode !== drawMode) playSound('select');
    setDrawMode(mode);
  };

  // Stroke dots for visual progress
  const strokeDots = React.useMemo(() => {
    const dots = [];
    for (let i = 0; i < Math.min(totalStrokes, 12); i++) {
      let className = 'stroke-dot';
      if (i < strokesCompleted) className += ' completed';
      else if (i === strokesCompleted && !isComplete) className += ' current';
      dots.push(<div key={i} className={className} />);
    }
    if (totalStrokes > 12) {
      dots.push(<span key="more" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>+{totalStrokes - 12}</span>);
    }
    return dots;
  }, [totalStrokes, strokesCompleted, isComplete]);

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-coral)' }}>{t('draw.charNumber', { count: currentIndex + 1 })}</span>
      </header>

      <MiniAppHeader
        icon="brush"
        title={t('draw.title')}
        subtitle={t('draw.subtitle')}
        pill={scopePill}
      />

      {/* Mode selector */}
      <div className="mini-app-segment draw-mode-selector">
        <button
          className={`draw-mode-btn ${drawMode === 'learn' ? 'active' : ''}`}
          onClick={() => selectDrawMode('learn')}
        >
          <AppIcon name="card" /> {t('draw.mode.learn')}
        </button>
        <button
          className={`draw-mode-btn ${drawMode === 'practice' ? 'active' : ''}`}
          onClick={() => selectDrawMode('practice')}
        >
          <AppIcon name="brush" /> {t('draw.mode.practice')}
        </button>
        <button
          className={`draw-mode-btn ${drawMode === 'quiz' ? 'active' : ''}`}
          onClick={() => selectDrawMode('quiz')}
        >
          <AppIcon name="target" /> {t('draw.mode.quiz')}
        </button>
      </div>

      {/* Character info */}
      <div className="draw-prompt-card card" style={{ textAlign: 'center', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div className="hanzi-display" style={{ fontSize: '48px', color: 'var(--accent-lime)', minWidth: '64px' }}>
            {(drawMode === 'learn' || showReference) ? currentChar.hanzi : '?'}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="pinyin-display" style={{ fontSize: '20px', marginTop: 0 }}>{currentChar.pinyin}</div>
            <p className="text-sm" style={{ margin: '4px 0 0 0' }}>{currentChar.meaning}</p>
          </div>
        </div>
      </div>

      {/* Hanzi Writer container */}
      <div className="writer-mini-program hanzi-writer-container">
        {isLoading && (
          <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#07c160', animation: 'loadingPulse 1s ease-in-out infinite' }}><AppIcon name="brush" /></div>
            <div className="text-sm">{t('draw.loading')}</div>
          </div>
        )}
        <div ref={containerRef} style={{ touchAction: 'none', opacity: isLoading ? 0 : 1 }} />
        {feedback && (
          <div className={`draw-feedback ${feedback.type}`}>
            {feedback.message}
          </div>
        )}
      </div>

      {/* Stroke progress */}
      {drawMode !== 'learn' && totalStrokes > 0 && (
        <div className="stroke-counter">
          {strokeDots}
        </div>
      )}

      {/* Controls based on mode */}
      <div className="canvas-controls">
        {drawMode === 'learn' ? (
          <>
            <button className="btn btn-secondary" onClick={handleAnimate}>{t('draw.animate')}</button>
            <button className="btn btn-primary" onClick={handleNext}>
              {currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextChar')}
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-secondary" onClick={handleReset}>
              {isComplete ? t('common.writeAgain') : t('common.reset')}
            </button>
            <button className="btn btn-secondary" onClick={() => { playSound('reveal'); setShowReference(prev => !prev); }}>
              {showReference ? t('common.hide') : t('common.hint')}
            </button>
            {isComplete && (
              <button className="btn btn-primary" onClick={handleNext}>
                {currentIndex === vocab.length - 1 ? t('common.done') : t('common.nextChar')}
              </button>
            )}
          </>
        )}
      </div>

      {/* Stats */}
      {drawMode !== 'learn' && (
        <div className="draw-stats">
          <div className="draw-stat">
            <div className="draw-stat-value">{strokesCompleted}/{totalStrokes}</div>
            <div className="draw-stat-label">{t('draw.strokes')}</div>
          </div>
          <div className="draw-stat">
            <div className="draw-stat-value" style={{ color: mistakes > 0 ? 'var(--accent-coral)' : 'var(--accent-lime)' }}>{mistakes}</div>
            <div className="draw-stat-label">{t('draw.mistakes')}</div>
          </div>
          <div className="draw-stat">
            <div className="draw-stat-value">{charStats.completed}</div>
            <div className="draw-stat-label">{t('draw.completed')}</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={handlePrev} disabled={currentIndex === 0}>{t('common.prevChar')}</button>
        {(drawMode === 'learn' || !isComplete) && (
          <button className="btn btn-secondary" onClick={handleNext}>
            {t('common.skip')}
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================
// QUIZ VIEW
// ============================================
function QuizView({ selectedLesson, selectedQueue, progress, updateProgress, markCharacterMastered, setCurrentView, playSound, t }) {
  const baseVocab = React.useMemo(() => selectedQueue?.items?.length ? selectedQueue.items : (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY), [selectedLesson, selectedQueue]);
  const [vocab] = React.useState(() => getStudyQueue(baseVocab, progress));
  const [initialMasteredChars] = React.useState(progress.masteredChars);
  const scopePill = selectedQueue ? getQueueDisplayLabel(selectedQueue, t) : (selectedLesson ? `L${selectedLesson}` : t('nav.quiz'));
  const [questions, setQuestions] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [attemptedAnswers, setAttemptedAnswers] = React.useState([]);
  const [answeredCorrect, setAnsweredCorrect] = React.useState(false);
  const [revealedAnswer, setRevealedAnswer] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);
  const [quizType, setQuizType] = React.useState(null);

  const generateQuestions = React.useCallback(() => {
    const mastered = getKnownSet(initialMasteredChars);
    const weakPool = vocab.filter(v => !mastered.has(v.hanzi));
    const source = weakPool.length >= 4 ? weakPool : vocab;
    const shuffled = [...source].sort(() => Math.random() - 0.5).slice(0, Math.min(10, source.length));
    const qs = shuffled.map(char => {
      const similar = getSimilarDistractors(char, vocab, 3);
      const fill = vocab
        .filter(v => v.id !== char.id && !similar.some(s => s.id === v.id))
        .sort(() => Math.random() - 0.5);
      const wrong = [...similar, ...fill].slice(0, 3);
      let opts;
      if (quizType === 'hanzi-to-pinyin') {
        opts = [{ text: char.pinyin, isCorrect: true }, ...wrong.map(w => ({ text: w.pinyin, isCorrect: false }))];
      } else if (quizType === 'pinyin-to-hanzi') {
        opts = [{ text: char.hanzi, isCorrect: true }, ...wrong.map(w => ({ text: w.hanzi, isCorrect: false }))];
      } else {
        opts = [{ text: char.meaning, isCorrect: true }, ...wrong.map(w => ({ text: w.meaning, isCorrect: false }))];
      }
      const uniqueOpts = [];
      opts.forEach(opt => {
        if (!uniqueOpts.some(existing => existing.text === opt.text)) uniqueOpts.push(opt);
      });
      return { char, options: uniqueOpts.sort(() => Math.random() - 0.5), type: quizType };
    });
    setQuestions(qs);
    setCurrentIndex(0);
    setScore(0);
    setAttemptedAnswers([]);
    setAnsweredCorrect(false);
    setRevealedAnswer(false);
    setIsComplete(false);
  }, [vocab, quizType, initialMasteredChars]);

  React.useEffect(() => {
    if (quizType) generateQuestions();
  }, [quizType, generateQuestions]);

  const handleAnswer = (option) => {
    if (answeredCorrect || revealedAnswer || attemptedAnswers.some(a => a.text === option.text)) return;
    if (option.isCorrect) {
      playSound('correct');
      const newScore = score + 1;
      setScore(newScore);
      setAnsweredCorrect(true);
      markCharacterMastered(questions[currentIndex].char.hanzi);
      return;
    }
    const nextAttempts = [...attemptedAnswers, option];
    playSound(nextAttempts.length >= 2 ? 'reveal' : 'wrong');
    setAttemptedAnswers(nextAttempts);
    if (nextAttempts.length >= 2) {
      setRevealedAnswer(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      playSound('tap');
      setCurrentIndex(currentIndex + 1);
      setAttemptedAnswers([]);
      setAnsweredCorrect(false);
      setRevealedAnswer(false);
    } else {
      playSound('complete');
      setIsComplete(true);
      updateProgress({ quizScores: [...progress.quizScores, { score, total: questions.length, date: new Date().toISOString() }] });
    }
  };

  const chooseQuizType = (type) => {
    playSound('select');
    setQuizType(type);
  };

  const restartQuiz = () => {
    playSound('select');
    generateQuestions();
  };

  const changeQuizMode = () => {
    playSound('tap');
    setQuizType(null);
  };

  if (!quizType) {
    return (
      <div className="screen">
        <header className="header">
          <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
          <HeaderLogoMark />
        </header>
        <MiniAppHeader
          icon="target"
          title={t('quiz.title')}
          subtitle={t('quiz.subtitle')}
          pill={scopePill}
        />
      <div className="card card-clickable card-accent-lime quiz-mode-card" onClick={() => chooseQuizType('hanzi-to-pinyin')} role="button" tabIndex={0}>
          <span className="quiz-mode-icon"><AppIcon name="sound" /></span>
          <div>
            <p className="title-lg">{t('quiz.mode.hanziPinyin')}</p>
            <p className="text-sm">{t('quiz.mode.hanziPinyinCopy')}</p>
          </div>
        </div>
      <div className="card card-clickable card-accent-cyan quiz-mode-card" onClick={() => chooseQuizType('pinyin-to-hanzi')} role="button" tabIndex={0}>
          <span className="quiz-mode-icon"><AppIcon name="target" /></span>
          <div>
            <p className="title-lg">{t('quiz.mode.pinyinHanzi')}</p>
            <p className="text-sm">{t('quiz.mode.pinyinHanziCopy')}</p>
          </div>
        </div>
      <div className="card card-clickable card-accent-coral quiz-mode-card" onClick={() => chooseQuizType('hanzi-to-meaning')} role="button" tabIndex={0}>
          <span className="quiz-mode-icon"><AppIcon name="book" /></span>
          <div>
            <p className="title-lg">{t('quiz.mode.hanziMeaning')}</p>
            <p className="text-sm">{t('quiz.mode.hanziMeaningCopy')}</p>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="screen">
        <header className="header">
          <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        </header>
        <div className="results-display">
          <div className="score-circle">
            <div className="score-value">{pct}%</div>
            <div className="score-label">{t('common.score')}</div>
          </div>
          <h2 className="title-xl">{pct >= 80 ? t('quiz.resultGreat') : pct >= 60 ? t('quiz.resultGood') : t('quiz.resultKeep')}</h2>
          <p className="text-sm" style={{ marginTop: '12px' }}>{t('quiz.scoreLine', { score, total: questions.length })}</p>
        </div>
        <div className="nav-actions">
        <button className="btn btn-secondary" onClick={changeQuizMode}>{t('quiz.changeMode')}</button>
        <button className="btn btn-primary" onClick={restartQuiz}>{t('quiz.again')}</button>
        </div>
      </div>
    );
  }

  const q = questions[currentIndex];
  if (!q) return null;
  const canContinue = answeredCorrect || revealedAnswer;
  const correctOption = q.options.find(opt => opt.isCorrect);
  const isWordQuestion = q.char.kind === 'word';

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm" style={{ color: 'var(--accent-purple)' }}>{currentIndex + 1} / {questions.length}</span>
      </header>
      <MiniAppHeader
        icon="target"
        title={t('quiz.title')}
        subtitle={t('quiz.subtitleActive')}
        pill={t('quiz.scoreFooter', { score, total: questions.length })}
      />
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(currentIndex / questions.length) * 100}%` }} />
      </div>
      <div className="quiz-question quiz-pass-card">
        {q.type === 'pinyin-to-hanzi' ? (
          <>
            <p className="text-sm">{t('quiz.whichHanzi')}</p>
            <div className="pinyin-display" style={{ fontSize: '42px', marginTop: '16px' }}>{q.char.pinyin}</div>
            <p className="meaning-display">{q.char.meaning}</p>
          </>
        ) : (
          <>
            <p className="text-sm">{q.type === 'hanzi-to-pinyin' ? t('quiz.howRead') : t('quiz.whatMeans')}</p>
            <div className={`hanzi-display hanzi-xl ${isWordQuestion ? 'hanzi-word' : ''}`} style={{ color: 'var(--accent-lime)' }}>{q.char.hanzi}</div>
          </>
        )}
      </div>
      <div className="quiz-options service-list">
        {q.options.map((opt, i) => {
          const wasTried = attemptedAnswers.some(a => a.text === opt.text);
          const showCorrect = canContinue && opt.isCorrect;
          return (
            <button
              key={i}
              className={`quiz-option ${showCorrect ? 'correct' : ''} ${wasTried ? 'incorrect disabled' : ''} ${canContinue ? 'disabled' : ''}`}
              onClick={() => handleAnswer(opt)}
              style={q.type === 'pinyin-to-hanzi' ? { fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', sans-serif", fontSize: opt.text.length > 2 ? '24px' : '32px', textAlign: 'center', justifyContent: 'center' } : {}}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {(attemptedAnswers.length > 0 || canContinue) && (
        <div className="quiz-feedback">
          {answeredCorrect ? (
            <strong>{t('quiz.correct')}</strong>
          ) : revealedAnswer ? (
            <>
              <div>{t('quiz.correctAnswer')}<strong>{correctOption?.text}</strong></div>
              <div className="pinyin-display">{q.char.pinyin}</div>
            </>
          ) : (
            <strong>{t('quiz.tryAgain')}</strong>
          )}
        </div>
      )}
      {canContinue && (
        <div className="nav-actions">
          <button className="btn btn-primary" onClick={handleNextQuestion}>
            {currentIndex === questions.length - 1 ? t('common.done') : t('quiz.next')}
          </button>
        </div>
      )}
      <p className="text-sm" style={{ textAlign: 'center', marginTop: '20px' }}>{t('quiz.scoreFooter', { score, total: currentIndex + (canContinue ? 1 : 0) })}</p>
    </div>
  );
}

// ============================================
// STATS VIEW
// ============================================
function StatsView({ progress, setCurrentView, t }) {
  const isOfflineCopy = window.location.protocol === 'file:';
  const byLesson = [12, 13, 14, 15].map(l => ({
    lesson: l,
    mastered: VOCABULARY.filter(v => v.lesson === l && progress.masteredChars.includes(v.hanzi)).length,
    total: VOCABULARY.filter(v => v.lesson === l).length
  }));
  const recentScores = progress.quizScores.slice(-5).reverse();

  const handleReset = () => {
    if (window.confirm(t('stats.confirmReset'))) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  const handleExport = () => {
    const exportData = {
      version: 1,
      exportDate: new Date().toISOString(),
      appName: 'hanzi-master',
      progress: progress
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hanzi-master-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);

        // Validate structure
        if (!data.progress || data.appName !== 'hanzi-master') {
          alert(t('stats.invalidBackup'));
          return;
        }

        // Merge with defaults for forward compatibility
        let imported = {
          masteredChars: data.progress.masteredChars || [],
          learningChars: data.progress.learningChars || [],
          quizScores: data.progress.quizScores || [],
          drawingAttempts: data.progress.drawingAttempts || {},
          lastPositions: data.progress.lastPositions || {},
          lastStudyDate: data.progress.lastStudyDate || null,
          streak: data.progress.streak || 0,
          totalReviews: data.progress.totalReviews || 0,
          streakDays: data.progress.streakDays || 0
        };

        // Migrate old ID-based backups to hanzi-based
        imported = migrateProgress(imported);

        if (window.confirm(t('stats.confirmImport', { date: new Date(data.exportDate).toLocaleDateString() }))) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(imported));
          window.location.reload();
        }
      } catch (err) {
        alert(t('stats.importFail'));
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <HeaderLogoMark />
      </header>

      <MiniAppHeader
        icon="wallet"
        title={t('stats.title')}
        subtitle={t('stats.subtitle')}
        pill={`${progress.masteredChars.length}/${VOCABULARY.length}`}
      />

      <div className="stats-bar stats-wallet">
        <div className="stat-item">
          <div className="stat-value">{progress.masteredChars.length}</div>
          <div className="stat-label">{t('home.stat.mastered')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{progress.totalReviews}</div>
          <div className="stat-label">{t('home.stat.reviews')}</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{progress.streakDays}</div>
          <div className="stat-label">{t('stats.streak')}</div>
        </div>
      </div>

      <div className="section-title">
        <span className="text-sm">{t('stats.byLesson')}</span>
        <div className="section-line" />
      </div>

      {byLesson.map(({ lesson, mastered, total }) => (
        <div key={lesson} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p className="title-md">{t('stats.lesson', { lesson })}</p>
            <span className="text-accent" style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif", fontSize: '20px', fontWeight: 900 }}>{mastered}/{total}</span>
          </div>
          <div className="progress-bar" style={{ marginTop: '10px', marginBottom: '0' }}>
            <div className="progress-fill" style={{ width: `${(mastered / total) * 100}%` }} />
          </div>
        </div>
      ))}

      {recentScores.length > 0 && (
        <>
          <div className="section-title">
            <span className="text-sm">{t('stats.recent')}</span>
            <div className="section-line" />
          </div>
          {recentScores.map((q, i) => (
            <div key={i} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px' }}>{new Date(q.date).toLocaleDateString()}</span>
                <span className="text-accent" style={{ fontFamily: "'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans CJK SC', 'Segoe UI', Arial, sans-serif", fontSize: '22px', fontWeight: 900 }}>{Math.round((q.score / q.total) * 100)}%</span>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="section-title">
        <span className="text-sm">{t('stats.allChars', { count: VOCABULARY.length })}</span>
        <div className="section-line" />
      </div>

      <div className="char-grid">
        {VOCABULARY.map(c => (
          <div key={c.id} className={`char-item ${progress.masteredChars.includes(c.hanzi) ? 'mastered' : progress.learningChars.includes(c.hanzi) ? 'learning' : ''}`} title={`${c.pinyin} - ${c.meaning}`}>
            {c.hanzi}
          </div>
        ))}
      </div>

      <div className="section-title" style={{ marginTop: '28px' }}>
        <span className="text-sm">{t('stats.backup')}</span>
        <div className="section-line" />
      </div>

      <div className="backup-buttons">
        <button className="btn btn-secondary" onClick={handleExport}>
          <span style={{ marginRight: '8px' }}>📤</span> {t('stats.export')}
        </button>
        <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
          <span style={{ marginRight: '8px' }}>📥</span> {t('stats.import')}
          <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
        </label>
      </div>

      <div className="section-title" style={{ marginTop: '28px' }}>
        <span className="text-sm">{t('stats.offline')}</span>
        <div className="section-line" />
      </div>

      <div className="offline-pack-card">
        <span className="offline-pack-icon"><AppIcon name="download" /></span>
        <div className="offline-pack-copy">
          <p className="title-md">{t('stats.offlineTitle')}</p>
          <p className="text-sm">{t('stats.offlineHint')}</p>
        </div>
        {isOfflineCopy ? (
          <span className="offline-ready-pill">{t('stats.offlineReady')}</span>
        ) : (
          <a
            className="btn btn-primary offline-download-button"
            href="hanzi-master-offline.zip"
            download="hanzi-master-offline.zip"
          >
            <AppIcon name="download" />
            <span>{t('stats.offlineDownload')}</span>
          </a>
        )}
      </div>

      <div style={{ marginTop: '20px' }}>
        <button className="btn btn-coral" onClick={handleReset}>{t('stats.reset')}</button>
      </div>
    </div>
  );
}
