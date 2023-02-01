// TOGGLE CLASS ACTIVE
const navbarNav = document.querySelector('.navbar-nav');
// KETIKA HUMBURGER MENU DIKLIK
onclick = () => {
  document.querySelector('#humburger-menu');
  navbarNav.classList.toggle('active');
}

// KLIK DI KUAR SB UNTUK MENGHILANGKAN NAV
const humburger = document.querySelector('#humburger-menu');

document.addEventListener('click', function(e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
});