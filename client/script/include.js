function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
          el.removeAttribute('data-include');
          includeHTML(); // Recursively call to handle nested includes
          initializePageSpecificJS(); // Reinitialize JavaScript after loading content
        })
        .catch(error => console.error('Error including HTML:', error));
    }
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);

function initializePageSpecificJS() {
  // Add your page-specific JavaScript initialization here
  if (window.location.pathname.includes('business.html')) {
    initializeBusinessPage();
  } else if (window.location.pathname.includes('index.html')) {
    initializeIndexPage();
  }
}