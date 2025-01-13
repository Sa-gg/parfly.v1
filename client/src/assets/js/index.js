document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navbarLinks = document.querySelectorAll('#navbar-ul > li > a,  #navbar-ul > li > button, #language-dropdown-menu-btn, #login-btn');
    const menuButton = document.getElementById('menu-btn-mobile');
  
    const updateNavbar = () => {
      if (window.scrollY > 0 || navbar.classList.contains('show')) {
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-transparent');
        navbarLinks.forEach(link => {
          link.classList.add('text-black');
          link.classList.remove('text-white');
        });
      } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white');
        navbarLinks.forEach(link => {
          link.classList.add('text-white');
          link.classList.remove('text-black');
        });
      }
    };
  
    window.addEventListener('scroll', updateNavbar);
    menuButton.addEventListener('click', () => {
      navbar.classList.toggle('show');
      updateNavbar();
    });
  
    updateNavbar(); // Initial check
  });