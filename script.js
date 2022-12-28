// JavaScript
const toggleBtn = document.querySelector('#drawer-toggle');
const drawer = document.querySelector('#sidebar-drawer');

toggleBtn.addEventListener('click', () => {
  drawer.classList.toggle('open');
});
