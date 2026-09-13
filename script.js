
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-open'); const isOpen = mainNav.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

document.addEventListener('click', (event) => {
  const clickedInsideNav = mainNav.contains(event.target);
  const clickedToggle = navToggle.contains(event.target);
 
  if (!clickedInsideNav && !clickedToggle && mainNav.classList.contains('nav-open')) {
    mainNav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', false);
  }
});