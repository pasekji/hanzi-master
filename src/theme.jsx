// ============================================
// THEMES (light / dark / sakura)
// Applied via data-theme on <html>; persisted to localStorage and synced
// through the account progress document (progress.theme).
// ============================================
const THEME_STORAGE_KEY = 'hanzi_master_theme';

const THEMES = [
  { id: 'light', labelKey: 'theme.light', swatch: 'linear-gradient(135deg, #e8f7ef 45%, #07c160 55%, #1677ff)' },
  { id: 'dark', labelKey: 'theme.dark', swatch: 'linear-gradient(135deg, #0d1210 45%, #2dd48a 55%, #1677ff)' },
  { id: 'sakura', labelKey: 'theme.sakura', swatch: 'linear-gradient(135deg, #fdeef4 45%, #ec4899 55%, #f59e0b)' },
];

const THEME_META_COLOR = { light: '#e8f7ef', dark: '#0d1210', sakura: '#fdeef4' };

const isValidTheme = (id) => THEMES.some((t) => t.id === id);

const loadTheme = () => {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (isValidTheme(saved)) return saved;
  } catch (e) {
    console.warn('Failed to load theme:', e);
  }
  return 'light';
};

const applyTheme = (id) => {
  const theme = isValidTheme(id) ? id : 'light';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {
    console.warn('Failed to save theme:', e);
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_META_COLOR[theme]);
};

function ThemePicker({ theme, onChange, t }) {
  return (
    <div className="theme-picker" role="group" aria-label={t('theme.section')}>
      {THEMES.map((th) => (
        <button
          key={th.id}
          type="button"
          className={`theme-chip ${theme === th.id ? 'active' : ''}`}
          onClick={() => onChange(th.id)}
          aria-pressed={theme === th.id}
        >
          <span className="theme-swatch" style={{ background: th.swatch }} aria-hidden="true" />
          <span className="theme-chip-label">{t(th.labelKey)}</span>
        </button>
      ))}
    </div>
  );
}
