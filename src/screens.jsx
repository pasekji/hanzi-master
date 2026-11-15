// ============================================
// SCREENS — clean rewrite (ink & paper layout)
// ============================================

function HomeView({ progress, setCurrentView, setSelectedLesson, setSelectedQueue, language, setLanguage, playSound, openTutorial, t }) {
  const catalogSet = React.useMemo(() => new Set(STUDY_CATALOG.map(i => i.hanzi)), []);
  const masteredCount = React.useMemo(() => new Set(progress.masteredChars.filter(h => catalogSet.has(h))).size, [catalogSet, progress.masteredChars]);
  const learningCount = progress.learningChars.length;
  const totalChars = STUDY_CATALOG.length || VOCABULARY.length;
  const percent = Math.round((masteredCount / totalChars) * 100);
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const isNewUser = progress.totalReviews === 0 && masteredCount === 0 && learningCount === 0;
  const openDaily = () => { setSelectedLesson(null); setSelectedQueue(null); playSound('select'); setCurrentView('daily'); };

  return (
    <div className="screen">
      <header className="super-topbar">
        <div className="brand-lockup">
          <span className="brand-mark" style={{ color: 'var(--accent)' }}><HanziLogoSvg /></span>
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
          {progress.streakDays > 0 && (
            <span className="daily-chip"><span className="chip-char" aria-hidden="true">火</span> {progress.streakDays}</span>
          )}
        </div>
      </header>

      <div className="hero-block">
        <div className="hero-char-wrap">
          <span className="hero-char">{dailyQueue[0]?.hanzi || '字'}</span>
          <span className="hero-seal">三</span>
        </div>
        <h2 className="hero-title">{isNewUser ? t('home.heroTitleNew') : t('home.heroTitle')}</h2>
        <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
        <button className="btn btn-primary hero-cta" onClick={openDaily}>
          <span>{isNewUser ? t('home.heroCtaNew') : t('home.heroCtaReturn')}</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className="hero-hint">{t('home.heroHint', { count: dailyQueue.length })}</p>
      </div>

      {isNewUser ? (
        <div className="wallet-card">
          <p className="wallet-label">{t('home.walletLabel')}</p>
          <div className="wallet-empty-body">
            <span className="wallet-empty-char">字</span>
            <div>
              <p className="title-md">{t('home.walletEmptyTitle')}</p>
              <p className="text-sm">{t('home.walletEmptyCopy')}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="wallet-card">
          <p className="wallet-label">{t('home.walletLabel')}</p>
          <div className="wallet-score">{percent}%</div>
          <div className="progress-bar"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
          <div className="wallet-meta">
            <span>{t('home.masteredMeta', { mastered: masteredCount, total: totalChars })}</span>
            <span>{t('home.learningMeta', { count: learningCount })}</span>
          </div>
        </div>
      )}

      <div className="card" style={{ padding: '14px 16px' }}>
        <ListRow
          icon="gift"
          label={t('home.dailyKicker')}
          meta={`${dailyQueue.length}`}
          onClick={openDaily}
        />
        <div className="daily-entry-strip">
          {dailyQueue.slice(0, 6).map(c => <span key={c.hanzi} className="daily-entry-char">{c.hanzi}</span>)}
        </div>
      </div>

      <div className="list-panel">
        <div className="list-head">{t('home.myMiniPrograms')}</div>
        <ListRow icon="scan" label={t('tiles.lessons')} onClick={() => { setSelectedQueue(null); setCurrentView('lessons'); }} />
        <ListRow icon="card" label={t('tiles.cards')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('learn'); }} />
        <ListRow icon="brush" label={t('tiles.write')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }} />
        <ListRow icon="target" label={t('tiles.quiz')} onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }} />
      </div>
    </div>
  );
}

function DailyTrainingView({ progress, setCurrentView, setSelectedLesson, setSelectedQueue, playSound, t }) {
  const dailyQueue = React.useMemo(() => getDailyTrainingQueue(VOCABULARY, progress, 8), [progress]);
  const summary = React.useMemo(() => getDailyTrainingSummary(dailyQueue), [dailyQueue]);
  const openMode = (view) => {
    setSelectedLesson(null);
    setSelectedQueue({ id: `daily:${getTodayKey()}`, labelKey: 'common.today', items: dailyQueue });
    playSound('select');
    setCurrentView(view);
  };
  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm">{getTodayKey()}</span>
      </header>
      <h1 className="title-lg">{t('daily.title')}</h1>
      <p className="text-sm" style={{ marginTop: '4px' }}>{t('daily.subtitle')}</p>

      <div className="card">
        <p className="title-md">{t('daily.heroTitle')}</p>
        <p className="text-sm" style={{ marginTop: '4px' }}>{t('daily.heroCopy')}</p>
        <div className="daily-queue-grid">
          {dailyQueue.map(c => (
            <span key={c.hanzi} className="daily-queue-char">
              <span className="hanzi-display">{c.hanzi}</span>
              <small>{t(`daily.reason.${c.dailyReason}`)}</small>
            </span>
          ))}
        </div>
        <div className="daily-reason-row">
          <span>{t('daily.reason.new')} {summary.new || 0}</span>
          <span>{t('daily.reason.review')} {summary.review || 0}</span>
          <span>{t('daily.reason.solidify')} {summary.solidify || 0}</span>
        </div>
      </div>

      <div className="list-panel">
        <div className="list-head">{t('daily.count', { count: dailyQueue.length })}</div>
        <ListRow icon="card" label={t('daily.step1.title')} meta={t('daily.step1.copy')} onClick={() => openMode('learn')} />
        <ListRow icon="brush" label={t('daily.step2.title')} meta={t('daily.step2.copy')} onClick={() => openMode('draw')} />
        <ListRow icon="target" label={t('daily.step3.title')} meta={t('daily.step3.copy')} onClick={() => openMode('quiz')} />
      </div>

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={() => setCurrentView('home')}>{t('daily.doneEnough')}</button>
        <button className="btn btn-primary" onClick={() => openMode('learn')}>{t('daily.start')}</button>
      </div>
    </div>
  );
}

function LessonsView({ setCurrentView, setSelectedLesson, setSelectedQueue, progress, t }) {
  const lessons = [12, 13, 14, 15].map(l => ({
    lesson: l,
    total: VOCABULARY.filter(v => v.lesson === l).length,
    mastered: VOCABULARY.filter(v => v.lesson === l && progress.masteredChars.includes(v.hanzi)).length,
  }));
  const openLesson = (lesson, view) => {
    setSelectedQueue(null);
    setSelectedLesson(lesson);
    setCurrentView(view);
  };
  const collections = getMaterialCollectionQueues();
  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm">{t('lessons.title')}</span>
      </header>
      <h1 className="title-lg">{t('lessons.title')}</h1>
      <p className="text-sm" style={{ marginTop: '4px' }}>{t('lessons.subtitle')}</p>

      <div className="list-panel">
        <div className="list-head">{t('lessons.quick')}</div>
        {lessons.map(l => (
          <ListRow
            key={l.lesson}
            icon="book"
            label={t('stats.lesson', { lesson: l.lesson })}
            meta={`${l.mastered}/${l.total}`}
            onClick={() => openLesson(l.lesson, 'learn')}
          />
        ))}
      </div>

      <div className="list-panel">
        <div className="list-head">{t('lessons.materialBanks')}</div>
        {collections.map(c => (
          <ListRow
            key={c.id}
            icon="card"
            label={c.labelKey ? t(c.labelKey) : (c.labelEn || c.labelZh || c.id)}
            meta={`${c.items.length}`}
            onClick={() => {
              setSelectedLesson(null);
              setSelectedQueue(getMaterialCollectionQueue(MATERIAL_COLLECTIONS.find(m => m.id === c.id)));
              setCurrentView('learn');
            }}
          />
        ))}
      </div>

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }}>{t('lessons.drawAll')}</button>
        <button className="btn btn-primary" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }}>{t('lessons.quizAll')}</button>
      </div>
    </div>
  );
}

function LearnView({ selectedLesson, selectedQueue, progress, markCharacterLearned, updateProgress, setCurrentView, playSound, t }) {
  const vocab = React.useMemo(() => {
    if (selectedQueue?.items) return selectedQueue.items;
    if (selectedLesson) return getStudyQueue(VOCABULARY.filter(v => v.lesson === selectedLesson), progress);
    return getStudyQueue(VOCABULARY, progress);
  }, [selectedQueue, selectedLesson, progress]);
  const [index, setIndex] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [showRelated, setShowRelated] = React.useState(false);
  const current = vocab[Math.min(index, vocab.length - 1)];
  const related = React.useMemo(() => {
    if (!current?.lesson) return [];
    return COMPOUNDS.filter(c => c.lesson === current.lesson && c.hanzi.includes(current.hanzi)).slice(0, 6);
  }, [current]);

  React.useEffect(() => { setIndex(0); setFlipped(false); }, [selectedQueue, selectedLesson]);

  const go = (dir) => {
    playSound('tap');
    if (dir > 0 && current) markCharacterLearned(current.hanzi);
    updateProgress({ lastPositions: { ...progress.lastPositions, learn: index } });
    setIndex(i => Math.max(0, Math.min(vocab.length - 1, i + dir)));
    setFlipped(false);
    setShowRelated(false);
  };

  if (!current) return <div className="screen"><header className="header"><button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button></header></div>;

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm">{index + 1} / {vocab.length}</span>
      </header>
      <div className="progress-bar"><div className="progress-fill" style={{ width: `${((index + 1) / vocab.length) * 100}%` }} /></div>

      <div className="flashcard" onClick={() => { playSound('select'); setFlipped(!flipped); }} role="button" tabIndex={0}>
        {!flipped ? (
          <div className="hanzi-hero">{current.hanzi}</div>
        ) : (
          <div>
            <div className="hanzi-hero" style={{ fontSize: '56px', color: 'var(--ink)' }}>{current.hanzi}</div>
            <div className="pinyin-display">{current.pinyin}</div>
            <div className="meaning-display">{current.meaning}</div>
            {current.example && <p className="material-example">{current.example}</p>}
          </div>
        )}
        {!flipped && <p className="flashcard-hint">{t('learn.tap')}</p>}
      </div>

      {CHARACTER_MEMORY_CUES[current.hanzi] && (
        <div className="card">
          <p className="text-sm" style={{ fontStyle: 'italic' }}>{CHARACTER_MEMORY_CUES[current.hanzi]}</p>
        </div>
      )}

      {related.length > 0 && (
        <div className="card">
          <button className="list-row" style={{ width: '100%' }} onClick={() => { playSound('reveal'); setShowRelated(!showRelated); }}>
            <span className="list-label">{t('learn.related', { count: related.length })}</span>
            <span className="list-arrow">{showRelated ? '−' : '+'}</span>
          </button>
          {showRelated && (
            <div className="daily-entry-strip" style={{ padding: '10px 0 2px' }}>
              {related.map(c => (
                <span key={c.hanzi} className="daily-entry-char" title={`${c.pinyin} — ${c.meaning}`}>{c.hanzi}</span>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={() => go(-1)} disabled={index === 0}>{t('common.prevCard')}</button>
        <button className="btn btn-primary" onClick={() => go(1)}>{index === vocab.length - 1 ? t('common.done') : t('common.nextCard')}</button>
      </div>
    </div>
  );
}

function DrawView({ selectedLesson, selectedQueue, progress, updateProgress, markCharacterMastered, setCurrentView, playSound, t }) {
  const vocab = React.useMemo(() => {
    const base = selectedQueue?.items || (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : VOCABULARY);
    return getDrawQueue(base, progress);
  }, [selectedQueue, selectedLesson, progress]);
  const [index, setIndex] = React.useState(0);
  const [feedback, setFeedback] = React.useState(null);
  const [mistakes, setMistakes] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const containerRef = React.useRef(null);
  const writerRef = React.useRef(null);
  const mistakesRef = React.useRef(0);
  const current = vocab[Math.min(index, vocab.length - 1)];

  React.useEffect(() => {
    if (!current || !containerRef.current) return;
    setFeedback(null); setMistakes(0); setDone(false); mistakesRef.current = 0;
    let writer;
    try {
      writer = HanziWriter.create(containerRef.current, current.hanzi, {
        width: 280, height: 280,
        padding: 10,
        drawingWidth: 6,
        showHintAfterMisses: 2,
        highlightOnComplete: true,
        charDataLoader: (char, onComplete) => {
          const data = window.HANZI_STROKE_DATA?.[char];
          if (data) onComplete(data);
          else setFeedback({ type: 'error', message: t('draw.feedback.noData') });
        },
      });
      writerRef.current = writer;
      setTimeout(() => {
        writer.quiz({
          onCorrectStroke: () => { playSound('stroke'); setFeedback({ type: 'success', message: t('draw.feedback.start') }); setTimeout(() => setFeedback(null), 700); },
          onMistake: () => { playSound('wrong'); mistakesRef.current += 1; setMistakes(mistakesRef.current); setFeedback({ type: 'error', message: t('draw.feedback.retry') }); setTimeout(() => setFeedback(null), 700); },
          onComplete: () => {
            playSound('complete');
            setDone(true);
            markCharacterMastered(current.hanzi);
            setFeedback({ type: 'success', message: mistakesRef.current === 0 ? t('draw.feedback.perfect') : t('draw.feedback.done') });
          },
        });
      }, 250);
    } catch (e) { console.warn('writer error', e); }
    return () => { writerRef.current = null; };
  }, [index, current?.hanzi]);

  const go = (dir) => {
    playSound('tap');
    updateProgress({ lastPositions: { ...progress.lastPositions, draw: index } });
    setIndex(i => Math.max(0, Math.min(vocab.length - 1, i + dir)));
  };

  if (!current) return <div className="screen"><header className="header"><button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button></header></div>;

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm">{index + 1} / {vocab.length}</span>
      </header>
      <h1 className="title-lg">{current.pinyin}</h1>
      <p className="text-sm" style={{ marginTop: '2px' }}>{current.meaning}</p>

      <div className="draw-canvas-wrap">
        <div ref={containerRef} className="hanzi-writer-container" />
      </div>
      <div className="draw-stats">
        <span>{t('draw.strokes')}: {current.strokes}</span>
        <span>{t('draw.mistakes')}: {mistakes}</span>
        <span>{t('draw.completed')}: {done ? '✓' : '…'}</span>
      </div>
      <p className={`draw-feedback ${feedback?.type || ''}`}>{feedback?.message || ''}</p>

      <div className="nav-actions">
        <button className="btn btn-secondary" onClick={() => go(-1)} disabled={index === 0}>{t('common.prevChar')}</button>
        <button className="btn btn-primary" onClick={() => go(1)}>{index === vocab.length - 1 ? t('common.done') : t('common.nextChar')}</button>
      </div>
    </div>
  );
}

function QuizView({ selectedLesson, selectedQueue, progress, updateProgress, markCharacterMastered, setCurrentView, playSound, t }) {
  const [mode, setMode] = React.useState(null); // hanzi-to-pinyin | pinyin-to-hanzi | hanzi-to-meaning
  const [questions, setQuestions] = React.useState(null);
  const [qIndex, setQIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [answered, setAnswered] = React.useState(null);

  const startQuiz = (m) => {
    playSound('select');
    setMode(m);
    const pool = selectedQueue?.items || (selectedLesson ? VOCABULARY.filter(v => v.lesson === selectedLesson) : getStudyQueue(VOCABULARY, progress));
    const qs = pool.slice(0, 10).map((item) => {
      const distractors = getSimilarDistractors(item, pool, 3);
      const options = [...distractors, item].sort(() => Math.random() - 0.5);
      return { item, options };
    });
    setQuestions(qs);
    setQIndex(0); setScore(0); setAnswered(null);
  };

  const answer = (opt) => {
    if (answered !== null) return;
    const q = questions[qIndex];
    const correct = opt.hanzi === q.item.hanzi;
    setAnswered(opt.hanzi);
    if (correct) { setScore(s => s + 1); playSound('correct'); markCharacterMastered(q.item.hanzi); }
    else playSound('wrong');
  };

  const next = () => {
    playSound('tap');
    if (qIndex === questions.length - 1) {
      updateProgress({ quizScores: [...progress.quizScores, { date: new Date().toISOString(), score, total: questions.length }].slice(-50) });
      setQuestions(null); setMode(null);
    } else {
      setQIndex(qIndex + 1); setAnswered(null);
    }
  };

  if (!mode) {
    return (
      <div className="screen">
        <header className="header">
          <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
          <span className="text-sm">{t('quiz.title')}</span>
        </header>
        <h1 className="title-lg">{t('quiz.title')}</h1>
        <p className="text-sm" style={{ marginTop: '4px' }}>{t('quiz.subtitle')}</p>
        <div className="list-panel">
          <ListRow icon="sound" label={t('quiz.mode.hanziPinyin')} meta={t('quiz.mode.hanziPinyinCopy')} onClick={() => startQuiz('hanzi-to-pinyin')} />
          <ListRow icon="target" label={t('quiz.mode.pinyinHanzi')} meta={t('quiz.mode.pinyinHanziCopy')} onClick={() => startQuiz('pinyin-to-hanzi')} />
          <ListRow icon="book" label={t('quiz.mode.hanziMeaning')} meta={t('quiz.mode.hanziMeaningCopy')} onClick={() => startQuiz('hanzi-to-meaning')} />
        </div>
      </div>
    );
  }

  if (!questions) {
    const pct = Math.round((score / Math.max(questions?.length || score, 1)) * 100);
    return null;
  }

  // results screen after finishing — handled by next() resetting; show results when answered last
  if (questions && qIndex === questions.length - 1 && answered !== null && mode) {
    // show result after short delay via state — simpler: compute on last answer
  }

  const q = questions[qIndex];
  const prompt = mode === 'hanzi-to-pinyin' ? q.item.hanzi : mode === 'pinyin-to-hanzi' ? q.item.pinyin : q.item.hanzi;
  const answerText = (o) => mode === 'hanzi-to-pinyin' ? o.pinyin : mode === 'pinyin-to-hanzi' ? o.hanzi : o.meaning;
  const questionLabel = mode === 'hanzi-to-pinyin' ? t('quiz.howRead') : mode === 'pinyin-to-hanzi' ? t('quiz.whichHanzi') : t('quiz.whatMeans');

  const isLast = qIndex === questions.length - 1;
  if (answered !== null && isLast) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="screen">
        <header className="header">
          <button className="back-btn" onClick={() => { setQuestions(null); setMode(null); }}>{t('quiz.changeMode')}</button>
        </header>
        <div className="card" style={{ textAlign: 'center', padding: '32px 20px' }}>
          <div className="score-value">{pct}%</div>
          <div className="score-label">{t('common.score')}</div>
          <h2 className="title-lg" style={{ marginTop: '12px' }}>{pct >= 80 ? t('quiz.resultGreat') : pct >= 60 ? t('quiz.resultGood') : t('quiz.resultKeep')}</h2>
          <p className="text-sm" style={{ marginTop: '8px' }}>{t('quiz.scoreLine', { score, total: questions.length })}</p>
        </div>
        <div className="nav-actions">
          <button className="btn btn-secondary" onClick={() => { setQuestions(null); setMode(null); }}>{t('quiz.tryAgain')}</button>
          <button className="btn btn-primary" onClick={() => { setQuestions(null); setMode(null); setCurrentView('home'); }}>{t('common.done')}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => { setQuestions(null); setMode(null); }}>{t('quiz.changeMode')}</button>
        <span className="text-sm">{qIndex + 1} / {questions.length}</span>
      </header>
      <p className="text-sm" style={{ textAlign: 'center' }}>{questionLabel}</p>
      <div className="quiz-question">{prompt}</div>
      <div className="quiz-options">
        {q.options.map((o) => {
          const isCorrect = o.hanzi === q.item.hanzi;
          const cls = answered === null ? '' : isCorrect ? 'correct' : (answered === o.hanzi ? 'incorrect' : 'disabled');
          return (
            <button key={o.hanzi + o.pinyin} className={`quiz-option ${cls}`} onClick={() => answer(o)} disabled={answered !== null}>
              {answerText(o)}
            </button>
          );
        })}
      </div>
      {answered !== null && (
        <div className="nav-actions">
          <button className="btn btn-primary" onClick={next}>{isLast ? t('common.done') : t('quiz.next')}</button>
        </div>
      )}
    </div>
  );
}

function StatsView({ progress, setCurrentView, t, session, syncState, lastSyncAt, account, theme, setTheme, soundEnabled, setSoundEnabled, ambienceEnabled, setAmbienceEnabled, playSound, updateProgress }) {
  const isOfflineCopy = window.location.protocol === 'file:';
  const byLesson = [12, 13, 14, 15].map(l => ({
    lesson: l,
    mastered: VOCABULARY.filter(v => v.lesson === l && progress.masteredChars.includes(v.hanzi)).length,
    total: VOCABULARY.filter(v => v.lesson === l).length,
  }));
  const recentScores = progress.quizScores.slice(-5).reverse();

  const handleReset = () => {
    if (window.confirm(t('stats.confirmReset'))) {
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify({ version: 1, exportDate: new Date().toISOString(), appName: 'hanzi-master', progress }, null, 2)], { type: 'application/json' });
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
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.progress || data.appName !== 'hanzi-master') { alert(t('stats.invalidBackup')); return; }
        if (window.confirm(t('stats.confirmImport', { date: new Date(data.exportDate).toLocaleDateString() }))) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(migrateProgress(data.progress)));
          window.location.reload();
        }
      } catch { alert(t('stats.importFail')); }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={() => setCurrentView('home')}>{t('common.back')}</button>
        <span className="text-sm">{t('stats.title')}</span>
      </header>
      <h1 className="title-lg">{t('stats.title')}</h1>
      <p className="text-sm" style={{ marginTop: '4px' }}>{t('stats.subtitle')}</p>

      <div className="stats-bar">
        <div className="stat-item"><div className="stat-value">{progress.masteredChars.length}</div><div className="stat-label">{t('home.stat.mastered')}</div></div>
        <div className="stat-item"><div className="stat-value">{progress.totalReviews}</div><div className="stat-label">{t('home.stat.reviews')}</div></div>
        <div className="stat-item"><div className="stat-value">{progress.streakDays}</div><div className="stat-label">{t('stats.streak')}</div></div>
      </div>

      <div className="section-title"><span className="text-sm">{t('stats.byLesson')}</span><div className="section-line" /></div>
      <div className="list-panel">
        {byLesson.map(l => (
          <div key={l.lesson} className="list-row" style={{ cursor: 'default' }}>
            <span className="list-label">{t('stats.lesson', { lesson: l.lesson })}</span>
            <span className="list-meta">{l.mastered}/{l.total}</span>
          </div>
        ))}
      </div>

      {recentScores.length > 0 && (
        <>
          <div className="section-title"><span className="text-sm">{t('stats.recent')}</span><div className="section-line" /></div>
          <div className="list-panel">
            {recentScores.map((q, i) => (
              <div key={i} className="list-row" style={{ cursor: 'default' }}>
                <span className="list-label">{new Date(q.date).toLocaleDateString()}</span>
                <span className="list-meta">{Math.round((q.score / q.total) * 100)}%</span>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="section-title"><span className="text-sm">{t('stats.allChars', { count: VOCABULARY.length })}</span><div className="section-line" /></div>
      <div className="char-grid">
        {VOCABULARY.map(c => (
          <span key={c.id} className={`char-item ${progress.masteredChars.includes(c.hanzi) ? 'mastered' : progress.learningChars.includes(c.hanzi) ? 'learning' : ''}`} title={`${c.pinyin} — ${c.meaning}`}>{c.hanzi}</span>
        ))}
      </div>

      <div className="section-title"><span className="text-sm">{t('settings.section')}</span><div className="section-line" /></div>
      <div className="card settings-row">
        <SoundToggle soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} t={t} />
        <AmbienceToggle ambienceEnabled={ambienceEnabled} setAmbienceEnabled={setAmbienceEnabled} t={t} />
      </div>

      <div className="section-title"><span className="text-sm">{t('theme.section')}</span><div className="section-line" /></div>
      <div className="card">
        <ThemePicker theme={theme} onChange={setTheme} t={t} />
      </div>

      {!isOfflineCopy && (
        <>
          <div className="section-title"><span className="text-sm">{t('account.section')}</span><div className="section-line" /></div>
          <AccountSection session={session} syncState={syncState} lastSyncAt={lastSyncAt} account={account} t={t} playSound={playSound} />
        </>
      )}

      <div className="section-title"><span className="text-sm">{t('share.section')}</span><div className="section-line" /></div>
      <ShareSection session={session} progress={progress} updateProgress={updateProgress} t={t} playSound={playSound} />

      <div className="section-title"><span className="text-sm">{t('stats.backup')}</span><div className="section-line" /></div>
      <div className="backup-buttons">
        <button className="btn btn-secondary" onClick={handleExport}>{t('stats.export')}</button>
        <label className="btn btn-secondary" style={{ cursor: 'pointer' }}>
          {t('stats.import')}
          <input type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
        </label>
      </div>

      <div className="section-title"><span className="text-sm">{t('stats.offline')}</span><div className="section-line" /></div>
      <div className="card offline-pack-card">
        <span className="offline-pack-icon"><AppIcon name="download" /></span>
        <div className="offline-pack-copy">
          <p className="title-md">{t('stats.offlineTitle')}</p>
          <p className="text-sm">{t('stats.offlineHint')}</p>
        </div>
        {!isOfflineCopy && <a className="btn btn-primary" href="hanzi-master-offline.zip" download="hanzi-master-offline.zip">{t('stats.offlineDownload')}</a>}
      </div>

      <div className="nav-actions">
        <button className="btn btn-coral" onClick={handleReset}>{t('stats.reset')}</button>
      </div>
    </div>
  );
}
