// ============================================
// BADGES — milestones as seal-stamped characters
// ============================================
const BADGES = [
  { id: 'first-review', char: '始', titleKey: 'badge.firstReview.title', descKey: 'badge.firstReview.desc', test: (p) => p.totalReviews >= 1 },
  { id: 'first-mastered', char: '一', titleKey: 'badge.firstMastered.title', descKey: 'badge.firstMastered.desc', test: (p) => p.masteredChars.length >= 1 },
  { id: 'streak-3', char: '火', titleKey: 'badge.streak3.title', descKey: 'badge.streak3.desc', test: (p) => p.streakDays >= 3 },
  { id: 'first-quiz', char: '成', titleKey: 'badge.firstQuiz.title', descKey: 'badge.firstQuiz.desc', test: (p) => (p.quizScores?.length || 0) >= 1 },
  { id: 'mastered-10', char: '十', titleKey: 'badge.mastered10.title', descKey: 'badge.mastered10.desc', test: (p) => p.masteredChars.length >= 10 },
  { id: 'streak-7', char: '七', titleKey: 'badge.streak7.title', descKey: 'badge.streak7.desc', test: (p) => p.streakDays >= 7 },
  { id: 'mastered-50', char: '满', titleKey: 'badge.mastered50.title', descKey: 'badge.mastered50.desc', test: (p) => p.masteredChars.length >= 50 },
  { id: 'streak-30', char: '卅', titleKey: 'badge.streak30.title', descKey: 'badge.streak30.desc', test: (p) => p.streakDays >= 30 },
  { id: 'mastered-100', char: '百', titleKey: 'badge.mastered100.title', descKey: 'badge.mastered100.desc', test: (p) => p.masteredChars.length >= 100 },
];

const getUnlockedBadgeIds = (progress) => BADGES.filter((b) => b.test(progress)).map((b) => b.id);

const getBadgeById = (id) => BADGES.find((b) => b.id === id);

function BadgeToast({ badge, onClose, t }) {
  React.useEffect(() => {
    const h = window.setTimeout(onClose, 3500);
    return () => window.clearTimeout(h);
  }, [onClose]);
  if (!badge) return null;
  return (
    <div className="badge-toast" role="status" onClick={onClose}>
      <span className="badge-toast-seal" aria-hidden="true">{badge.char}</span>
      <div>
        <p className="badge-toast-kicker">{t('badge.unlocked')}</p>
        <p className="badge-toast-title">{t(badge.titleKey)}</p>
      </div>
    </div>
  );
}

function BadgeGrid({ progress, t }) {
  const unlocked = React.useMemo(() => new Set(getUnlockedBadgeIds(progress)), [progress]);
  return (
    <div className="badge-grid">
      {BADGES.map((b) => (
        <div key={b.id} className={`badge-cell ${unlocked.has(b.id) ? 'unlocked' : ''}`} title={t(b.titleKey)}>
          <span className="badge-seal" aria-hidden="true">{b.char}</span>
          <span className="badge-label">{t(b.titleKey)}</span>
        </div>
      ))}
    </div>
  );
}
