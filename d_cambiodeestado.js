// Lista de tareas
let tareas = [
  [1, "Correr", "08:00", "10:00", "Activa"],
  [2, "Desayunar", "10:00", "12:00", "Por Iniciar"],
  [3, "Cambiarse", "12:00", "14:00", "En Progreso"],
  [4, "Bailar", "12:20", "14:00", "En Progreso"],
];
function agregarTarea() {
  const nombre = document.getElementById("nombre").value;
  const inicio = document.getElementById("inicio").value;
  const fin = document.getElementById("fin").value;
  const estado = document.getElementById("estado").value;


  let siguienteCodigo = 1;
  if (tareas.length > 0) {
    siguienteCodigo = tareas[tareas.length - 1][0] + 1;
  }

  const nuevaTarea = [siguienteCodigo, nombre, inicio, fin, estado];


  tareas.push(nuevaTarea);

  mostrarTareas(); 
}
function eliminarTarea() {
  const codigo = parseInt(document.getElementById("eliminarCodigo").value);

  // Buscar el índice de la tarea con el código proporcionado
  const indiceTarea = tareas.findIndex(tarea => tarea[0] === codigo);

  // Verificar si se encontró la tarea
  if (indiceTarea !== -1) {
    // Eliminar la tarea de la lista
    tareas.splice(indiceTarea, 1);
    console.log(`Tarea con código ${codigo} eliminada exitosamente.`);
    mostrarTareas(); // Actualizar la visualización de las tareas
  } else {
    console.log(`No se encontró ninguna tarea con el código ${codigo}.`);
  }
}



function cambiarEstadoTarea() {
  const selectCodigo = document.getElementById("codigoTarea");
  const codigo = selectCodigo.value;
  const nuevoEstado = document.getElementById("nuevoEstado").value;

  // Buscar y actualizar el estado de la tarea
  tareas.forEach((tarea) => {
    if (tarea[0] == codigo) {
      tarea[4] = nuevoEstado;
    }
  });

  mostrarTareas(); // Actualizar la visualización de las tareas
}

// Función para mostrar las tareas en la página y llenar el select de códigos de tarea
function mostrarTareas() {
  const contenedor = document.getElementById("listaTareas");
  contenedor.innerHTML = "";

  const selectCodigo = document.getElementById("codigoTarea");
  selectCodigo.innerHTML = "";
  // Iterar sobre cada tarea para actualizar la lista y el select de códigos
  tareas.forEach((tarea) => {
    // Actualizar la lista de tareas visible
    const tareaElemento = document.createElement("div");
    tareaElemento.innerText = `Código: ${tarea[0]}, Tarea: ${tarea[1]}, Inicio: ${tarea[2]}, Fin: ${tarea[3]}, Estado: ${tarea[4]}`;
    contenedor.appendChild(tareaElemento);

    // Llenar el select de códigos de tarea
    const opcion = document.createElement("option");
    opcion.value = tarea[0];
    opcion.innerText = `Código ${tarea[0]}: ${tarea[1]}`;
    selectCodigo.appendChild(opcion);
  });
}

document.addEventListener("DOMContentLoaded", mostrarTareas);

function descargarReporteTareas() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Reporte de Tareas", 10, 10);
  let y = 20; // Iniciar en la posición vertical 20

  tareas.forEach((tarea) => {
    let textoTarea = `Código: ${tarea[0]}, Tarea: ${tarea[1]}, Inicio: ${tarea[2]}, Fin: ${tarea[3]}, Estado: ${tarea[4]}`;
    doc.text(textoTarea, 10, y);
    y += 10; // Aumentar la posición vertical para la siguiente tarea
  });

  // Guardar el documento PDF generado
  doc.save("reporte-tareas.pdf");
}

document
  .getElementById("descargarReporte")
  .addEventListener("click", descargarReporteTareas);
