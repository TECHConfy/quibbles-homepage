// Quibbles Clone - script.js

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Filter tab active state
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white');
      b.classList.add('bg-gray-100', 'text-gray-700');
    });
    btn.classList.add('bg-blue-600', 'text-white');
    btn.classList.remove('bg-gray-100', 'text-gray-700');
  });
});