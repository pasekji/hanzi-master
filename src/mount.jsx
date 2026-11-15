// ============================================
// MOUNT
// ============================================
document.body.classList.add('app-ready');
ReactDOM.createRoot(document.getElementById('root')).render(<HanziMasterApp />);

// PWA: register service worker (https only; offline copy skips it)
if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((e) => console.warn('SW registration failed:', e));
  });
}
