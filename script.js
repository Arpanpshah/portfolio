/* ===========================
   ARPAN SHAH PORTFOLIO — SCRIPT.JS
   =========================== */

// ── Theme Toggle ──────────────────────────────────────────────
const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

// ── Sticky Navbar ─────────────────────────────────────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Hamburger Menu ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

// ── Smooth Scroll ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Scroll Reveal ─────────────────────────────────────────────
const revealEls = document.querySelectorAll(
  '.about-card, .skill-group, .timeline-card, .project-card, .edu-card, .contact-card, .section-heading, .about-stats, .hero-cta, .contact-intro'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── Active Nav Link Highlighting ──────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => sectionObserver.observe(sec));

// ── Staggered card animations ─────────────────────────────────
document.querySelectorAll('.skills-grid, .projects-grid, .contact-grid').forEach(grid => {
  const cards = grid.children;
  Array.from(cards).forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });
});

// ── Timeline marker hover ─────────────────────────────────────
document.querySelectorAll('.timeline-item').forEach(item => {
  const dot = item.querySelector('.marker-dot');
  const card = item.querySelector('.timeline-card');
  card.addEventListener('mouseenter', () => {
    if (!dot.classList.contains('active')) {
      dot.style.borderColor = 'var(--accent)';
      dot.style.background = 'var(--accent-glow)';
    }
  });
  card.addEventListener('mouseleave', () => {
    if (!dot.classList.contains('active')) {
      dot.style.borderColor = '';
      dot.style.background = '';
    }
  });
});

// ── Typing cursor effect in hero eyebrow ─────────────────────
(function() {
  const eyebrow = document.querySelector('.hero-eyebrow');
  if (!eyebrow) return;
  const original = eyebrow.textContent.replace('Available for new opportunities', '').trim();
  // No-op — just ensuring static content loads correctly
})();

console.log('%c Arpan Shah Portfolio ', 'background:#5b8dee;color:white;padding:4px 10px;border-radius:4px;font-weight:600');
console.log('%c Senior iOS Developer — Built with vanilla HTML, CSS & JS', 'color:#7a7a9a');
