var toggler = document.getElementById('toggler');
var navMenu = document.getElementById('nav-menu');
toggler.addEventListener('click', function (element) {
    navMenu.classList.toggle('active');
});
AOS.init();
