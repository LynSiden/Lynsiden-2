// Header shrink on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Fade in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Theme toggle
const toggle = document.getElementById('themeToggle');
const body = document.body;
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Testimonials rotation
const testimonials = [
  { text: '“LynSiden leverte nettsiden vår på rekordtid og vi fikk nye kunder med en gang!”', author: '- Ola, Rørleggermester' },
  { text: '“Utrolig enkel prosess og flott resultat. Anbefales!”', author: '- Kari, Frisør' },
  { text: '“Vår beste markedsføringsinvestering noensinne.”', author: '- Per, Snekker' }
];
let tIndex = 0;
setInterval(() => {
  tIndex = (tIndex + 1) % testimonials.length;
  document.getElementById('testimonial-text').textContent = testimonials[tIndex].text;
  document.getElementById('testimonial-author').textContent = testimonials[tIndex].author;
}, 5000);
