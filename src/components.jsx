// ============================================
// COMPONENTS — all-new icon set & brand marks (no legacy assets)
// Ink-stroke icons, vermilion seal brand.
// ============================================

function HanziLogoSvg() {
  // Brand mark: vermilion seal with a single calligraphic brush stroke.
  return (
    <svg className="hanzi-logo-svg" width="92" height="92" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="6" y="6" width="84" height="84" rx="14" fill="currentColor" />
      <path
        d="M28 66 C 30 46, 44 32, 58 34 C 70 36, 72 50, 62 56 C 54 61, 44 58, 42 50"
        stroke="#fffdf8" strokeWidth="9" strokeLinecap="round" fill="none"
      />
      <circle cx="66" cy="30" r="4.5" fill="#fffdf8" />
    </svg>
  );
}

function SealMarkSvg() {
  // Small seal for tutorial / empty states — same brush stroke, no dot.
  return (
    <svg width="72" height="72" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="8" width="80" height="80" rx="16" fill="#c8371f" />
      <path
        d="M30 64 C 32 47, 45 35, 58 37 C 68 39, 70 51, 61 56 C 54 60, 46 57, 44 50"
        stroke="#fffdf8" strokeWidth="9" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

function AppIcon({ name }) {
  const p = {
    width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'home':
      return <svg {...p}><path d="M4 11.5 12 4l8 7.5" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>;
    case 'card':
      return <svg {...p}><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 10h16" /><path d="M8 14.5h5" /></svg>;
    case 'brush':
      return <svg {...p}><path d="M14 5l5 5-8.5 8.5-5 1 1-5L14 5Z" /><path d="M12.5 6.5l5 5" /><path d="M5 20c3-1 5-.5 7-2" /></svg>;
    case 'target':
      return <svg {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>;
    case 'chart':
      return <svg {...p}><path d="M4 4v16h16" /><path d="M8 15l3-4 3 2 5-6" /></svg>;
    case 'scan':
      return <svg {...p}><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" /><path d="M7 12h10" /></svg>;
    case 'book':
      return <svg {...p}><path d="M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 0-2 2V5Z" /><path d="M4 19a2 2 0 0 1 2-2h14" /><path d="M9 8h7" /></svg>;
    case 'sound':
      return <svg {...p}><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M16.5 9a4.5 4.5 0 0 1 0 6" /><path d="M19 6.5a8 8 0 0 1 0 11" /></svg>;
    case 'mute':
      return <svg {...p}><path d="M4 9v6h4l5 4V5L8 9H4Z" /><path d="M16 9l5 6M21 9l-5 6" /></svg>;
    case 'tea':
      return <svg {...p}><path d="M5 11h12v4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-4Z" /><path d="M17 12h1.5a2.5 2.5 0 0 1 0 5H17" /><path d="M8 21h8" /><path d="M9 8c-.8-1-.8-2 0-3M13 8c-.8-1-.8-2 0-3" /></svg>;
    case 'gift':
      return <svg {...p}><rect x="4" y="10" width="16" height="10" rx="1" /><path d="M12 10v10M4 14h16" /><path d="M12 10c-4 0-5-2-4.5-3.5C8 5 10 5 11 6c.8.8 1 2.5 1 4Zm0 0c4 0 5-2 4.5-3.5C16 5 14 5 13 6c-.8.8-1 2.5-1 4Z" /></svg>;
    case 'wallet':
      return <svg {...p}><path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" /><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M16 13h2" /></svg>;
    case 'help':
      return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.8 2.1c-.8.5-1.3 1-1.3 2" /><path d="M12 17h.01" /></svg>;
    case 'download':
      return <svg {...p}><path d="M12 4v11" /><path d="M7 11l5 5 5-5" /><path d="M5 20h14" /></svg>;
    case 'print':
      return <svg {...p}><path d="M7 8V4h10v4" /><rect x="4" y="8" width="16" height="8" rx="2" /><path d="M7 13h10v7H7z" /></svg>;
    case 'search':
      return <svg {...p}><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></svg>;
    default:
      return <svg {...p}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 12h6M12 9v6" /></svg>;
  }
}

function BottomNav({ currentView, setCurrentView, setSelectedLesson, setSelectedQueue, t }) {
  if (['learn', 'draw', 'quiz', 'daily', 'secret'].includes(currentView)) return null;
  const items = [
    { view: 'home', icon: 'home', label: t('nav.home') },
    { view: 'learn', icon: 'card', label: t('nav.cards'), resetLesson: true },
    { view: 'draw', icon: 'brush', label: t('nav.write'), resetLesson: true },
    { view: 'quiz', icon: 'target', label: t('nav.quiz'), resetLesson: true },
    { view: 'stats', icon: 'chart', label: t('nav.wallet') },
  ];
  return (
    <nav className="app-bottom-nav" aria-label="Primary">
      {items.map(item => (
        <button
          key={item.view}
          className={`bottom-nav-item ${currentView === item.view ? 'active' : ''}`}
          onClick={() => {
            if (item.resetLesson) setSelectedLesson(null);
            setSelectedQueue(null);
            setCurrentView(item.view);
          }}
        >
          <span className="bottom-nav-icon"><AppIcon name={item.icon} /></span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function LanguageToggle({ language, setLanguage, playSound, t }) {
  return (
    <div className="language-toggle" aria-label="UI language">
      {['zh', 'en'].map(lang => (
        <button
          key={lang}
          className={language === lang ? 'active' : ''}
          aria-pressed={language === lang}
          onClick={() => { playSound?.('tap'); setLanguage(lang); }}
        >
          {t(lang === 'zh' ? 'lang.zh' : 'lang.en')}
        </button>
      ))}
    </div>
  );
}

function SoundToggle({ soundEnabled, setSoundEnabled, t }) {
  return (
    <button
      className={`sound-toggle ${soundEnabled ? 'active' : ''}`}
      onClick={() => { playSoundEffect(soundEnabled ? 'tap' : 'correct', true); setSoundEnabled(!soundEnabled); }}
      aria-label={soundEnabled ? t('sound.on') : t('sound.off')}
      aria-pressed={soundEnabled}
      title={t('sound.label')}
    >
      <AppIcon name={soundEnabled ? 'sound' : 'mute'} />
    </button>
  );
}

function AmbienceToggle({ ambienceEnabled, setAmbienceEnabled, t }) {
  return (
    <button
      className={`sound-toggle ${ambienceEnabled ? 'active' : ''}`}
      onClick={() => {
        const next = !ambienceEnabled;
        if (next) { playSoundEffect('reveal', true); startAmbienceLoop(); }
        else { playSoundEffect('tap', true); stopAmbienceLoop(); }
        setAmbienceEnabled(next);
      }}
      aria-label={ambienceEnabled ? t('ambience.on') : t('ambience.off')}
      aria-pressed={ambienceEnabled}
      title={t('ambience.label')}
    >
      <AppIcon name="tea" />
    </button>
  );
}

function ListRow({ icon, label, meta, onClick }) {
  return (
    <button className="list-row" onClick={onClick}>
      <span className="list-icon"><AppIcon name={icon} /></span>
      <span className="list-label">{label}</span>
      {meta && <span className="list-meta">{meta}</span>}
      <span className="list-arrow" aria-hidden="true">→</span>
    </button>
  );
}

const TUTORIAL_STEPS = [
  { icon: 'gift', view: 'daily', titleKey: 'tutorial.step.daily.title', bodyKey: 'tutorial.step.daily.body', actionKey: 'tutorial.step.daily.action' },
  { icon: 'card', view: 'learn', titleKey: 'tutorial.step.cards.title', bodyKey: 'tutorial.step.cards.body', actionKey: 'tutorial.step.cards.action' },
  { icon: 'brush', view: 'draw', titleKey: 'tutorial.step.write.title', bodyKey: 'tutorial.step.write.body', actionKey: 'tutorial.step.write.action' },
  { icon: 'target', view: 'quiz', titleKey: 'tutorial.step.quiz.title', bodyKey: 'tutorial.step.quiz.body', actionKey: 'tutorial.step.quiz.action' },
  { icon: 'wallet', view: 'stats', titleKey: 'tutorial.step.wallet.title', bodyKey: 'tutorial.step.wallet.body', actionKey: 'tutorial.step.wallet.action' },
];

const SHORTCUT_ROWS = [
  { keys: ['1', '2', '3', '4', '5', 'D', 'L'], labelKey: 'keys.nav' },
  { keys: ['Space', 'Enter'], labelKey: 'keys.flip' },
  { keys: ['←', '→'], labelKey: 'keys.cards' },
  { keys: ['1–4', 'Enter'], labelKey: 'keys.quiz' },
  { keys: ['?'], labelKey: 'keys.guide' },
  { keys: ['Esc'], labelKey: 'keys.back' },
];

function ShortcutsCard({ t }) {
  return (
    <div className="keys-list">
      {SHORTCUT_ROWS.map((row) => (
        <div key={row.labelKey} className="key-row">
          <span className="key-chips">
            {row.keys.map((k) => <kbd key={k} className="key-chip">{k}</kbd>)}
          </span>
          <span className="key-label">{t(row.labelKey)}</span>
        </div>
      ))}
    </div>
  );
}

function TutorialOverlay({ open, onClose, setCurrentView, setSelectedLesson, setSelectedQueue, playSound, t }) {
  const [stepIndex, setStepIndex] = React.useState(0);
  React.useEffect(() => { if (open) setStepIndex(0); }, [open]);
  if (!open) return null;
  const step = TUTORIAL_STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === TUTORIAL_STEPS.length - 1;
  const progress = Math.round(((stepIndex + 1) / TUTORIAL_STEPS.length) * 100);
  return (
    <div className="tutorial-backdrop" role="dialog" aria-modal="true" aria-label={t('tutorial.title')}>
      <div className="tutorial-card">
        <button className="tutorial-close" onClick={onClose} aria-label={t('tutorial.close')}>×</button>
        <div className="tutorial-hero">
          <SealMarkSvg />
          <div>
            <div className="tutorial-kicker">
              <span>{t('tutorial.badge')}</span>
              <span>{t('tutorial.stepCount', { current: stepIndex + 1, total: TUTORIAL_STEPS.length })}</span>
            </div>
            <h2 className="title-lg">{t('tutorial.title')}</h2>
            <p className="text-sm">{t('tutorial.intro')}</p>
          </div>
        </div>
        <div className="tutorial-progress"><div className="tutorial-progress-fill" style={{ width: `${progress}%` }} /></div>
        <div className="tutorial-step-card">
          <h3>{t(step.titleKey)}</h3>
          <p>{t(step.bodyKey)}</p>
        </div>
        <div className="tutorial-dots" aria-hidden="true">
          {TUTORIAL_STEPS.map((item, i) => <span key={item.titleKey} className={i === stepIndex ? 'active' : ''} />)}
        </div>
        <button className="tutorial-open-step" onClick={() => { playSound?.('select'); setSelectedLesson(null); setSelectedQueue(null); setCurrentView(step.view); onClose(); }}>
          <AppIcon name={step.icon} />
          <span>{t(step.actionKey)}</span>
        </button>
        <div className="tutorial-actions">
          <button className="tutorial-quiet" onClick={onClose}>{t('tutorial.skip')}</button>
          <div className="tutorial-action-pair">
            <button className="tutorial-secondary" onClick={() => { playSound?.('tap'); setStepIndex(Math.max(0, stepIndex - 1)); }} disabled={isFirst}>{t('tutorial.back')}</button>
            <button className="tutorial-primary" onClick={() => { playSound?.('tap'); isLast ? onClose() : setStepIndex(stepIndex + 1); }}>
              {isLast ? t('tutorial.done') : t('tutorial.next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
