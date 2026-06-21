function BottomNav({ currentView, setCurrentView, setSelectedLesson, setSelectedQueue, t }) {
  if (['learn', 'draw', 'quiz', 'daily'].includes(currentView)) return null;

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

const TUTORIAL_STEPS = [
  { icon: 'gift', view: 'daily', titleKey: 'tutorial.step.daily.title', bodyKey: 'tutorial.step.daily.body', actionKey: 'tutorial.step.daily.action' },
  { icon: 'card', view: 'learn', titleKey: 'tutorial.step.cards.title', bodyKey: 'tutorial.step.cards.body', actionKey: 'tutorial.step.cards.action' },
  { icon: 'brush', view: 'draw', titleKey: 'tutorial.step.write.title', bodyKey: 'tutorial.step.write.body', actionKey: 'tutorial.step.write.action' },
  { icon: 'target', view: 'quiz', titleKey: 'tutorial.step.quiz.title', bodyKey: 'tutorial.step.quiz.body', actionKey: 'tutorial.step.quiz.action' },
  { icon: 'wallet', view: 'stats', titleKey: 'tutorial.step.wallet.title', bodyKey: 'tutorial.step.wallet.body', actionKey: 'tutorial.step.wallet.action' },
];

function TutorialOverlay({ open, onClose, setCurrentView, setSelectedLesson, setSelectedQueue, playSound, t }) {
  const [stepIndex, setStepIndex] = React.useState(0);

  React.useEffect(() => {
    if (open) setStepIndex(0);
  }, [open]);

  if (!open) return null;

  const step = TUTORIAL_STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === TUTORIAL_STEPS.length - 1;
  const progress = Math.round(((stepIndex + 1) / TUTORIAL_STEPS.length) * 100);

  const goToStep = (nextIndex) => {
    playSound?.('tap');
    setStepIndex(Math.max(0, Math.min(TUTORIAL_STEPS.length - 1, nextIndex)));
  };

  const openStepView = () => {
    playSound?.('select');
    setSelectedLesson(null);
    setSelectedQueue(null);
    setCurrentView(step.view);
    onClose();
  };

  return (
    <div className="tutorial-backdrop" role="dialog" aria-modal="true" aria-label={t('tutorial.title')}>
      <div className="tutorial-card">
        <button className="tutorial-close" onClick={onClose} aria-label={t('tutorial.close')}>x</button>
        <div className="tutorial-hero">
          <div className="tutorial-panda"><PandaBuddySvg /></div>
          <div className="tutorial-copy-block">
            <div className="tutorial-kicker">
              <span>{t('tutorial.badge')}</span>
              <span>{t('tutorial.stepCount', { current: stepIndex + 1, total: TUTORIAL_STEPS.length })}</span>
            </div>
            <h2>{t('tutorial.title')}</h2>
            <p>{t('tutorial.intro')}</p>
          </div>
        </div>

        <div className="tutorial-progress">
          <div className="tutorial-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="tutorial-step-card">
          <span className="tutorial-step-icon"><AppIcon name={step.icon} /></span>
          <div>
            <h3>{t(step.titleKey)}</h3>
            <p>{t(step.bodyKey)}</p>
          </div>
        </div>

        <div className="tutorial-dots" aria-hidden="true">
          {TUTORIAL_STEPS.map((item, index) => (
            <span key={item.titleKey} className={index === stepIndex ? 'active' : ''} />
          ))}
        </div>

        <button className="tutorial-open-step" onClick={openStepView}>
          <AppIcon name={step.icon} />
          <span>{t(step.actionKey)}</span>
        </button>

        <div className="tutorial-actions">
          <button className="tutorial-quiet" onClick={onClose}>{t('tutorial.skip')}</button>
          <div className="tutorial-action-pair">
            <button className="tutorial-secondary" onClick={() => goToStep(stepIndex - 1)} disabled={isFirst}>{t('tutorial.back')}</button>
            <button className="tutorial-primary" onClick={() => (isLast ? onClose() : goToStep(stepIndex + 1))}>
              {isLast ? t('tutorial.done') : t('tutorial.next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LanguageToggle({ language, setLanguage, playSound, t }) {
  return (
    <div className="language-toggle" aria-label="UI language">
      <button
        className={language === 'zh' ? 'active' : ''}
        onClick={() => {
          playSound?.('tap');
          setLanguage('zh');
        }}
        aria-pressed={language === 'zh'}
      >
        {t('lang.zh')}
      </button>
      <button
        className={language === 'en' ? 'active' : ''}
        onClick={() => {
          playSound?.('tap');
          setLanguage('en');
        }}
        aria-pressed={language === 'en'}
      >
        {t('lang.en')}
      </button>
    </div>
  );
}

function SoundToggle({ soundEnabled, setSoundEnabled, t }) {
  const label = soundEnabled ? t('sound.on') : t('sound.off');
  return (
    <button
      className={`sound-toggle ${soundEnabled ? 'active' : ''}`}
      onClick={() => {
        playSoundEffect(soundEnabled ? 'tap' : 'correct', true);
        setSoundEnabled(!soundEnabled);
      }}
      aria-label={label}
      aria-pressed={soundEnabled}
      title={t('sound.label')}
    >
      <AppIcon name={soundEnabled ? 'sound' : 'mute'} />
    </button>
  );
}

function AmbienceToggle({ ambienceEnabled, setAmbienceEnabled, t }) {
  const label = ambienceEnabled ? t('ambience.on') : t('ambience.off');
  return (
    <button
      className={`sound-toggle ambience-toggle ${ambienceEnabled ? 'active' : ''}`}
      onClick={() => {
        const next = !ambienceEnabled;
        if (next) {
          playSoundEffect('reveal', true);
          startAmbienceLoop();
        } else {
          playSoundEffect('tap', true);
          stopAmbienceLoop();
        }
        setAmbienceEnabled(next);
      }}
      aria-label={label}
      aria-pressed={ambienceEnabled}
      title={t('ambience.label')}
    >
      <AppIcon name="tea" />
    </button>
  );
}

function AppIcon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };
  const stroke = { stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'home') return (
    <svg {...common}><path {...stroke} d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z"/><path {...stroke} d="M9 21h6"/></svg>
  );
  if (name === 'card') return (
    <svg {...common}><rect x="5" y="4" width="13" height="16" rx="3" fill="currentColor" opacity="0.14"/><path {...stroke} d="M8 8h8M8 12h5M8 16h7"/><path {...stroke} d="M17 4l2 2"/></svg>
  );
  if (name === 'brush') return (
    <svg {...common}><path {...stroke} d="M15.5 4.5 20 9l-8.5 8.5-4.5 1 1-4.5 7.5-9.5Z"/><path {...stroke} d="M13 7l4 4"/><path {...stroke} d="M5 20c2-1 3.5-.5 5-2"/></svg>
  );
  if (name === 'target') return (
    <svg {...common}><circle {...stroke} cx="12" cy="12" r="7"/><circle {...stroke} cx="12" cy="12" r="3"/><path {...stroke} d="M12 2v3M22 12h-3M12 22v-3M2 12h3"/></svg>
  );
  if (name === 'chart') return (
    <svg {...common}><path {...stroke} d="M5 19V9M12 19V5M19 19v-7"/><path {...stroke} d="M4 19h16"/></svg>
  );
  if (name === 'scan') return (
    <svg {...common}><path {...stroke} d="M5 9V6a1 1 0 0 1 1-1h3M15 5h3a1 1 0 0 1 1 1v3M19 15v3a1 1 0 0 1-1 1h-3M9 19H6a1 1 0 0 1-1-1v-3"/><path {...stroke} d="M8 12h8"/></svg>
  );
  if (name === 'book') return (
    <svg {...common}><path {...stroke} d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21V5.5Z"/><path {...stroke} d="M5 5.5A2.5 2.5 0 0 0 7.5 8H19"/><path {...stroke} d="M9 12h6"/></svg>
  );
  if (name === 'sound') return (
    <svg {...common}><path {...stroke} d="M4 10v4h4l5 4V6l-5 4H4Z"/><path {...stroke} d="M16 9.5c1.1 1.3 1.1 3.7 0 5M18.5 7c2.2 2.7 2.2 7.3 0 10"/></svg>
  );
  if (name === 'mute') return (
    <svg {...common}><path {...stroke} d="M4 10v4h4l5 4V6l-5 4H4Z"/><path {...stroke} d="M19 9l-5 5M14 9l5 5"/></svg>
  );
  if (name === 'tea') return (
    <svg {...common}><path {...stroke} d="M6 10h11v3.5A4.5 4.5 0 0 1 12.5 18h-2A4.5 4.5 0 0 1 6 13.5V10Z"/><path {...stroke} d="M17 11h1.2a1.8 1.8 0 0 1 0 3.6H17"/><path {...stroke} d="M8 21h8"/><path {...stroke} d="M9 7c-.7-.9-.7-1.8 0-2.7M12 7c-.7-.9-.7-1.8 0-2.7M15 7c-.7-.9-.7-1.8 0-2.7"/></svg>
  );
  if (name === 'gift') return (
    <svg {...common}><path {...stroke} d="M4 10h16v10H4V10Z"/><path {...stroke} d="M12 10v10M4 14h16M7 7c0-1.7 1.4-3 3-2l2 5H8a3 3 0 0 1-1-3ZM17 7c0-1.7-1.4-3-3-2l-2 5h4a3 3 0 0 0 1-3Z"/></svg>
  );
  if (name === 'wallet') return (
    <svg {...common}><path {...stroke} d="M5 7.5h13a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2h11"/><path {...stroke} d="M17 13h3"/><path {...stroke} d="M6 5.5 16 3v4.5"/></svg>
  );
  if (name === 'help') return (
    <svg {...common}><circle {...stroke} cx="12" cy="12" r="8"/><path {...stroke} d="M9.8 9.3a2.4 2.4 0 0 1 4.5 1.2c0 1.8-2.3 2-2.3 3.7"/><path {...stroke} d="M12 17h.01"/></svg>
  );
  return <svg {...common}><circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.14"/><path {...stroke} d="M8 12h8M12 8v8"/></svg>;
}

function HanziLogoSvg() {
  return (
    <svg className="hanzi-logo-svg" width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="8" width="76" height="76" rx="22" fill="url(#hanziLogoGradient)" />
      <rect x="18" y="18" width="56" height="56" rx="16" fill="white" opacity="0.12" />
      <text x="46" y="61" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="47" fontWeight="900" fill="white">字</text>
      <defs>
        <linearGradient id="hanziLogoGradient" x1="8" y1="8" x2="84" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160" />
          <stop offset="1" stopColor="#1677FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeaderLogoMark() {
  return (
    <div className="header-logo-mark" aria-hidden="true">
      <HanziLogoSvg />
    </div>
  );
}

function CoachSvg() {
  return (
    <svg className="coach-mini-svg" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="16" y="12" width="58" height="64" rx="20" fill="#E8FFF3"/>
      <rect x="21" y="17" width="48" height="48" rx="16" fill="url(#coachGradient)"/>
      <text x="45" y="50" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="30" fontWeight="900" fill="white">学</text>
      <circle cx="34" cy="33" r="2.4" fill="#17382A"/>
      <circle cx="56" cy="33" r="2.4" fill="#17382A"/>
      <path d="M38 56c4 3 10 3 14 0" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <path d="M20 66c-5 1-8 4-9 9 7 2 12 0 15-5" fill="#FFE5A3"/>
      <path d="M70 23c6-3 9-1 10 5-5 4-10 4-14 0" fill="#FFE5A3"/>
      <defs>
        <linearGradient id="coachGradient" x1="21" y1="17" x2="69" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160"/>
          <stop offset="1" stopColor="#1677FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function PandaBuddySvg() {
  return (
    <svg className="panda-buddy-svg" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="13" width="70" height="64" rx="22" fill="#E8FFF3"/>
      <circle cx="28" cy="29" r="10" fill="#17382A"/>
      <circle cx="62" cy="29" r="10" fill="#17382A"/>
      <circle cx="45" cy="43" r="27" fill="white"/>
      <ellipse cx="34" cy="40" rx="8" ry="10" fill="#17382A" transform="rotate(-18 34 40)"/>
      <ellipse cx="56" cy="40" rx="8" ry="10" fill="#17382A" transform="rotate(18 56 40)"/>
      <circle cx="35" cy="39" r="2.2" fill="white"/>
      <circle cx="55" cy="39" r="2.2" fill="white"/>
      <path d="M45 45c3 0 5 2 5 4s-2 4-5 4-5-2-5-4 2-4 5-4Z" fill="#17382A"/>
      <path d="M39 58c4 3 8 3 12 0" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <rect x="31" y="62" width="28" height="13" rx="6" fill="url(#pandaBookGradient)"/>
      <path d="M38 66h14M38 70h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <text x="69" y="66" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="16" fontWeight="900" fill="#07C160">学</text>
      <defs>
        <linearGradient id="pandaBookGradient" x1="31" y1="62" x2="59" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160"/>
          <stop offset="1" stopColor="#1677FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function LanternStickerSvg() {
  return (
    <svg className="story-sticker-svg" width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M45 5v10" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <rect x="31" y="12" width="28" height="8" rx="4" fill="#FFCF33"/>
      <rect x="24" y="18" width="42" height="38" rx="17" fill="url(#lanternGradient)"/>
      <path d="M34 21c-4 9-4 22 0 32M56 21c4 9 4 22 0 32" stroke="#FFE5A3" strokeWidth="3" strokeLinecap="round"/>
      <text x="45" y="44" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="21" fontWeight="900" fill="white">课</text>
      <rect x="33" y="55" width="24" height="7" rx="3.5" fill="#FFCF33"/>
      <path d="M45 62v6" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <defs>
        <linearGradient id="lanternGradient" x1="24" y1="18" x2="66" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5A5F"/>
          <stop offset="1" stopColor="#FF9F1C"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function BrushStickerSvg() {
  return (
    <svg className="story-sticker-svg" width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="11" width="54" height="42" rx="14" fill="#E8FFF3"/>
      <path d="M30 51c9-1 17-4 24-12" stroke="#07C160" strokeWidth="6" strokeLinecap="round"/>
      <path d="M50 17l19 19-8 8-19-19 8-8Z" fill="url(#brushGradient)"/>
      <path d="M42 25l19 19-10 7-16 4 4-16 3-14Z" fill="#FFE5A3"/>
      <path d="M42 25l19 19" stroke="#17382A" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="30" cy="22" r="4" fill="#1677FF"/>
      <defs>
        <linearGradient id="brushGradient" x1="42" y1="17" x2="69" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1677FF"/>
          <stop offset="1" stopColor="#07C160"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function SealStickerSvg() {
  return (
    <svg className="story-sticker-svg" width="90" height="72" viewBox="0 0 90 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="24" y="12" width="42" height="42" rx="12" fill="url(#sealGradient)"/>
      <rect x="31" y="19" width="28" height="28" rx="7" stroke="white" strokeWidth="3"/>
      <text x="45" y="40" textAnchor="middle" fontFamily="Microsoft YaHei, PingFang SC, Noto Sans CJK SC, sans-serif" fontSize="21" fontWeight="900" fill="white">会</text>
      <path d="M28 57h34" stroke="#17382A" strokeWidth="4" strokeLinecap="round"/>
      <path d="M36 63h18" stroke="#07C160" strokeWidth="4" strokeLinecap="round"/>
      <defs>
        <linearGradient id="sealGradient" x1="24" y1="12" x2="66" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#07C160"/>
          <stop offset="1" stopColor="#1677FF"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function IllustrationStrip({ setCurrentView, setSelectedLesson, setSelectedQueue, t }) {
  return (
    <div className="illustration-strip" aria-label="Study shortcuts">
      <button className="story-sticker" onClick={() => { setSelectedQueue(null); setCurrentView('lessons'); }}>
        <LanternStickerSvg />
        <span className="story-sticker-title">{t('stickers.lessons')}</span>
      </button>
      <button className="story-sticker" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('draw'); }}>
        <BrushStickerSvg />
        <span className="story-sticker-title">{t('stickers.write')}</span>
      </button>
      <button className="story-sticker" onClick={() => { setSelectedLesson(null); setSelectedQueue(null); setCurrentView('quiz'); }}>
        <SealStickerSvg />
        <span className="story-sticker-title">{t('stickers.quiz')}</span>
      </button>
    </div>
  );
}

function MiniProgramTile({ icon, label, onClick }) {
  return (
    <button className="mini-program-tile" onClick={onClick}>
      <span className="mini-program-icon"><AppIcon name={icon} /></span>
      <span className="mini-program-name">{label}</span>
    </button>
  );
}

function MiniAppHeader({ icon, title, subtitle, pill }) {
  return (
    <div className="mini-app-hero">
      <span className="mini-app-hero-icon"><AppIcon name={icon} /></span>
      <div>
        <h1 className="mini-app-title">{title}</h1>
        <p className="mini-app-subtitle">{subtitle}</p>
      </div>
      {pill && <span className="mini-app-pill">{pill}</span>}
    </div>
  );
}
