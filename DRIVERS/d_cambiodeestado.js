// Lista de tareas
let tareas = [
  [1, "Tarea 1", "08:00", "10:00", "Activa"],
  [2, "Tarea 2", "10:00", "12:00", "Por Iniciar"],
  [3, "Tarea 3", "12:00", "14:00", "En Progreso"],
  [4, "Tarea 4", "12:20", "14:00", "En Progreso"],
];

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
<<<<<<< HEAD
//Por aquí Ariana Hizo un botón de descargar Tareas del historial de Eliminadas.
=======
>>>>>>> 19018e5b7457d096c7935ec0ff312aea03054500
