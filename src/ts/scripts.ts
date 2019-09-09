const toggler = document.getElementById('toggler');
const navMenu = document.getElementById('nav-menu');

toggler.addEventListener('click', (element) => {
  navMenu.classList.toggle('active');
});