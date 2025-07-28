const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.getElementById('reservation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you! Your table has been reserved.");
  this.reset();
});
