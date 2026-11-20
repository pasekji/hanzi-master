// ============================================
// HANZI FONTS (sans / serif / kai)
// Applied via data-hanzi-font on <html>; persisted to localStorage and synced
// through the account progress document (progress.hanziFont).
// ============================================
const HANZI_FONT_STORAGE_KEY = 'hanzi_master_hanzi_font';

const HANZI_FONTS = [
  { id: 'sans', labelKey: 'font.sans', stack: "'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Noto Sans CJK SC', 'Source Han Sans SC', sans-serif" },
  { id: 'serif', labelKey: 'font.serif', stack: "'Songti SC', 'SimSun', 'Microsoft YaHei', serif" },
  { id: 'kai', labelKey: 'font.kai', stack: "'Kaiti SC', 'KaiTi', 'STKaiti', 'TW-Kai', 'Noto Serif CJK SC', serif" },
];

const HANZI_FONT_SAMPLE = '永';

const isValidHanziFont = (id) => HANZI_FONTS.some((f) => f.id === id);

const loadHanziFont = () => {
  try {
    const saved = localStorage.getItem(HANZI_FONT_STORAGE_KEY);
    if (isValidHanziFont(saved)) return saved;
  } catch (e) {
    console.warn('Failed to load hanzi font:', e);
  }
  return 'serif';
};

const applyHanziFont = (id) => {
  const font = isValidHanziFont(id) ? id : 'serif';
  document.documentElement.dataset.hanziFont = font;
  try {
    localStorage.setItem(HANZI_FONT_STORAGE_KEY, font);
  } catch (e) {
    console.warn('Failed to save hanzi font:', e);
  }
};

function HanziFontPicker({ hanziFont, onChange, t }) {
  return (
    <div className="font-picker" role="group" aria-label={t('font.section')}>
      {HANZI_FONTS.map((f) => (
        <button
          key={f.id}
          type="button"
          className={`font-chip ${hanziFont === f.id ? 'active' : ''}`}
          onClick={() => onChange(f.id)}
          aria-pressed={hanziFont === f.id}
        >
          <span className="font-sample" style={{ fontFamily: f.stack }} aria-hidden="true">{HANZI_FONT_SAMPLE}</span>
          <span className="font-chip-label">{t(f.labelKey)}</span>
        </button>
      ))}
    </div>
  );
}
