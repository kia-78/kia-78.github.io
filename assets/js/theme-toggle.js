(() => {
  const storageKey = 'reza-badiei-site-theme';
  const savedTheme = (() => {
    try { return localStorage.getItem(storageKey); }
    catch { return null; }
  })();
  const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.dataset.theme = initialTheme;

  class ThemeToggle extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <button class="theme-icon-button" type="button" title="Toggle theme" aria-label="Switch to dark theme">
          <span id="theme-icon" aria-hidden="true">
            <svg class="theme-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
            <svg class="theme-moon" viewBox="0 0 24 24"><path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"/></svg>
          </span>
        </button>`;

      this.querySelector('button').addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        this.setTheme(nextTheme);
      });
      this.updateButton();
    }

    setTheme(theme) {
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem(storageKey, theme); }
      catch { /* The selected theme still applies for this page view. */ }
      this.updateButton();
    }

    updateButton() {
      const button = this.querySelector('button');
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      button.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
      button.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
    }
  }

  customElements.define('theme-toggle', ThemeToggle);
})();
