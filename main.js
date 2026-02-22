// Navbar active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    link.style.background = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#7c6fcd';
      link.style.background = '#ede9f8';
    }
  });
});
