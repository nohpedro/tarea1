function crearNuevaTarea() {
  const nombre = document.getElementById("nombreTarea").value;
  const horaInicioStr = document.getElementById("horaInicio").value;
  const horaFinStr = document.getElementById("horaFin").value;

  const horaInicio = horaInicioStr ? new Date(horaInicioStr) : null;
  const horaFin = horaFinStr ? new Date(horaFinStr) : null;
  const nuevoCodigo = tareas.length + 1;

  tareas.push([nuevoCodigo, nombre, horaInicio, horaFin, "Nueva"]);

  // Limpiar campos de entrada
  document.getElementById("nombreTarea").value = "";
  document.getElementById("horaInicio").value = "";
  document.getElementById("horaFin").value = "";

  mostrarTareas();
  cambiarSeccion("crearTarea");
}
