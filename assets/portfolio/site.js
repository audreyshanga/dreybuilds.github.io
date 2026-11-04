const root = document.documentElement;
const toggle = document.querySelector('#theme');
function setTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  toggle.textContent = dark ? '☀' : '☾';
  toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}
let initial = 'dark';
try { initial = localStorage.getItem('portfolio-theme') || initial; } catch {}
setTheme(initial);
toggle.hidden = false;
toggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch {}
});
