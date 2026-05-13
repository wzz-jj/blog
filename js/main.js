// === Theme Toggle ===
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function getTheme() {
  return localStorage.getItem('blog_theme') || 'light';
}

function applyTheme(theme) {
  if (theme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
    const hlTheme = document.getElementById('highlightTheme');
    if (hlTheme) hlTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
  } else {
    html.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
    const hlTheme = document.getElementById('highlightTheme');
    if (hlTheme) hlTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
  }
}

applyTheme(getTheme());

themeToggle.addEventListener('click', () => {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  localStorage.setItem('blog_theme', next);
  applyTheme(next);
});

// === Mobile Menu ===
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => mobileNav.classList.toggle('show'));
}

// === Back to Top ===
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === Format date ===
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// === Posts data (from embedded data.js) ===
function fetchPosts() {
  return POSTS_DATA;
}

function getPostById(id) {
  return POSTS_DATA.find(p => p.id === id) || null;
}

// === Get URL param ===
function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}
