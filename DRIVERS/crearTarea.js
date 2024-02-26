function crearNuevaTarea() {
  const nombre = document.getElementById("nombreTarea").value;
  const horaInicio = document.getElementById("horaInicio").value;
  const horaFin = document.getElementById("horaFin").value;

  // Generar un nuevo código para la tarea (puedes hacerlo de manera automática)
  const nuevoCodigo = tareas.length + 1;

  // Añadir la nueva tarea al array
  tareas.push([nuevoCodigo, nombre, horaInicio, horaFin, "Nueva"]);

  document.getElementById("nombreTarea").value = "";
  document.getElementById("horaInicio").value = "";
  document.getElementById("horaFin").value = "";

  // Mostrar las tareas actualizadas
  mostrarTareas();
}
