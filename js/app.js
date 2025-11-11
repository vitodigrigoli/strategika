const toggleDropdown = (el) => {
  el.classList.toggle('dropdown--active');

  // Rimuove eventuali listener precedenti per evitare duplicati
  document.removeEventListener('click', handleClickOutside);
  document.addEventListener('click', handleClickOutside);

  function handleClickOutside(e) {

    if (!el.contains(e.target)) {
      el.classList.remove('dropdown--active');
      document.removeEventListener('click', handleClickOutside);
    }
  }
};

const toggle = document.querySelector('.navbar__toggle')
const menu = document.querySelector('.navbar__menu')

const toggleNavbar = () => {
  toggle.classList.toggle('navbar__toggle--open');
  menu.classList.toggle('navbar__menu--open');
}
