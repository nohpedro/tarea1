function crearNuevaTarea() {
<<<<<<< HEAD
    const nombre = document.getElementById("nombreTarea").value;
    const horaInicio = document.getElementById("horaInicio").value;
    const horaFin = document.getElementById("horaFin").value;
  
    // Generar un nuevo código para la tarea (puedes hacerlo de manera automática)
    const nuevoCodigo = tareas.length + 1;
    
  
    // Añadir la nueva tarea al array
    tareas.push([nuevoCodigo, nombre, horaInicio, horaFin, "Por Iniciar"]);

    document.getElementById("nombreTarea").value = "";
    document.getElementById("horaInicio").value = "";
    document.getElementById("horaFin").value = "";
  
    // Mostrar las tareas actualizadas
    mostrarTareas();
  }
=======
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

  alert("Tarea guardada exitosamente");
}
>>>>>>> 19018e5b7457d096c7935ec0ff312aea03054500
