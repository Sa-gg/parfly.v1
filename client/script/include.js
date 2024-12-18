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
  const bodyId = document.body.id;
  if (bodyId === 'business-page') {
    initializeBusinessPage();
  } else if (bodyId === 'index-page') {
    initializeIndexPage();
  }
}