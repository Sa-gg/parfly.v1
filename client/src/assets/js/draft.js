window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navbarLinks = document.querySelectorAll('#navbar-ul li a,  #navbar-ul li button, #language-dropdown-menu-btn, #login-btn');
    if (window.scrollY > 0) {
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
  });