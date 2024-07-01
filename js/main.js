const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open-icon');
const menuCloseIcon = document.getElementById('menu-close-icon');

mobileMenuButton.addEventListener('click', () => {
  const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
  mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
  mobileMenu.classList.toggle('hidden');
  menuOpenIcon.classList.toggle('hidden');
  menuCloseIcon.classList.toggle('hidden');
});