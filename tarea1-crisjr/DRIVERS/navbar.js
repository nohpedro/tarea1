function cambiarSeccion(seccionId) {
    document.querySelectorAll('.pagina').forEach(function(page) {
      page.style.display = 'none';
    });
    document.getElementById(seccionId).style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navCrearTarea').addEventListener('click', function() { cambiarSeccion('crearTarea'); });
    document.getElementById('navEditarTarea').addEventListener('click', function() { cambiarSeccion('editarTarea'); });
    document.getElementById('navEliminarTarea').addEventListener('click', function() { cambiarSeccion('eliminarTarea'); });
    document.getElementById('navGenerarReporte').addEventListener('click', function() { cambiarSeccion('generarReporte'); });
    document.getElementById('navCrearCategoria').addEventListener('click', function() { cambiarSeccion('crearCategoria'); });
    cambiarSeccion('crearTarea');
  });