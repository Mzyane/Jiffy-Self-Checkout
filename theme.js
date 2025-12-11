// Shared theme toggle functionality for all pages
function initTheme() {
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.addEventListener('DOMContentLoaded', updateThemeAssets);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeAssets();
}

function updateThemeAssets() {
  updateThemeIcon();
  updateLogos();
}

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
  }
}

function updateLogos() {
  const isDark = document.documentElement.classList.contains('dark');
  const logoElements = document.querySelectorAll('[data-logo-light][data-logo-dark]');
  logoElements.forEach((img) => {
    const targetSrc = isDark ? img.dataset.logoDark : img.dataset.logoLight;
    if (img.getAttribute('src') !== targetSrc) {
      img.setAttribute('src', targetSrc);
    }
  });
}

// Initialize theme before page loads
initTheme();
