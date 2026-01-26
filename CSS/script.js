const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');
const navButtons = document.querySelectorAll('nav button');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navButtons.forEach(btn => btn.classList.toggle('active'));
});
