// Utility to apply color scheme from localStorage
export function applyColorScheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('siteContent');
    let scheme = 'blue';
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        scheme = parsed.colorScheme || 'blue';
      } catch {}
    }
    document.body.dataset.colorScheme = scheme;
  }
}
