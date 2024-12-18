document.addEventListener('DOMContentLoaded', () => {
  const icon = document.getElementById('toggleIcon');
  icon.classList.toggle('rotate-180');

  let arrow = document.querySelectorAll(".arrow");
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    });
 }
});







