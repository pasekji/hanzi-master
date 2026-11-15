// ============================================
// THEMES (light / dark / sakura)
// Applied via data-theme on <html>; persisted to localStorage and synced
// through the account progress document (progress.theme).
// ============================================
const THEME_STORAGE_KEY = 'hanzi_master_theme';

const THEMES = [
  { id: 'light', labelKey: 'theme.light', swatch: 'linear-gradient(135deg, #f8f5ef 45%, #c8371f 60%, #191713)' },
  { id: 'dark', labelKey: 'theme.dark', swatch: 'linear-gradient(135deg, #14120f 45%, #e04a2a 60%, #efe9dd)' },
  { id: 'sakura', labelKey: 'theme.sakura', swatch: 'linear-gradient(135deg, #f9f1ee 45%, #c2452e 60%, #8a7a6d)' },
];

const THEME_META_COLOR = { light: '#f8f5ef', dark: '#14120f', sakura: '#f9f1ee' };

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
