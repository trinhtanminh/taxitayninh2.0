window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.scroll');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});

