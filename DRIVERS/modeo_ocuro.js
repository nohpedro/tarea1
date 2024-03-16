const toggleThemeBtn = document.getElementById('toggleTheme');
const navbar = document.querySelector('.navbar'); 

toggleThemeBtn.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Verificar si el modo oscuro está activo y ajustar las clases del navbar
  if(document.body.classList.contains('dark-mode')) {
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');
  } else {
    navbar.classList.remove('navbar-dark', 'bg-dark');
    navbar.classList.add('navbar-light', 'bg-light');
  }
});