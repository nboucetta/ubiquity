const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('#menu');
const homeLink = document.querySelector('.home');

toggleMenu.addEventListener('click', function() {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;

  homeLink.classList.toggle("home-burger");

});