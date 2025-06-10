// Toggle mobile nav
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Set current year in footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
