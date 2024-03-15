let tareas = [
  [1, "Levantarse", "08:00", "10:00", "Completada"],
  [2, "Comer", "10:00", "12:00", "En Curso"],
  [3, "Hacer deberes", "12:00", "14:00", "Nueva"],
  [4, "Ejercicio", "12:20", "14:00", "Completada"],
];

let tareaEditando = null;

function editarTarea() {
  const selectCodigo = document.getElementById("codigoTarea");
  const codigo = selectCodigo.value;

  // Buscar y seleccionar la tarea para edición
  tareaEditando = tareas.find((tarea) => tarea[0] == codigo);

  // Verificar si el estado de la tarea es "completado"
  if (tareaEditando[4] === "Completada") {
    // Mostrar mensaje de error
    alert("La tarea ya ha sido completada. No se puede cambiar el estado.");
    return; // Salir de la función si la tarea está completada
  }

  // Si la tarea no está completada, permitir la edición del estado
  document.getElementById("editNombre").value = tareaEditando[1];
  document.getElementById("editHoraInicio").value = tareaEditando[2];
  document.getElementById("editHoraFin").value = tareaEditando[3];
  document.getElementById("editEstado").value = tareaEditando[4];
}


function eliminarTarea() {
  const codigo = parseInt(document.getElementById("codigoTarea").value);
  const indiceTarea = tareas.findIndex((tarea) => tarea[0] === codigo);
  //const estado = document.getElementById("editEstado");

  /*if (estado.value == "En Curso") {
    return;
  } else {*/

  if (indiceTarea !== -1) {
    tareas.splice(indiceTarea, 1);
    console.log(`Tarea con código ${codigo} eliminada exitosamente.`);
    mostrarTareas();
  } else {
    console.log(`No se encontró ninguna tarea con el código ${codigo}.`);
  }
}

function guardarEdicion() {
  if (tareaEditando) {
    tareaEditando[1] = document.getElementById("editNombre").value;
    tareaEditando[2] = document.getElementById("editHoraInicio").value;
    tareaEditando[3] = document.getElementById("editHoraFin").value;
    tareaEditando[4] = document.getElementById("editEstado").value;

    document.getElementById("editNombre").value = "";
    document.getElementById("editHoraInicio").value = "";
    document.getElementById("editHoraFin").value = "";
    document.getElementById("editEstado").value = "";

    tareaEditando = null;
    mostrarTareas();
  }
}

function mostrarTareas() {
  const contenedor = document.getElementById("listaTareas");
  contenedor.innerHTML = "";

  const selectCodigo = document.getElementById("codigoTarea");
  selectCodigo.innerHTML = "";

  tareas.forEach((tarea) => {
    const tareaElemento = document.createElement("div");
    tareaElemento.innerText = `Código: ${tarea[0]}, Tarea: ${tarea[1]}, Inicio: ${tarea[2]}, Fin: ${tarea[3]}, Estado: ${tarea[4]}`;

    const opcion = document.createElement("option");
    opcion.value = tarea[0];
    opcion.innerText = `Código ${tarea[0]}: ${tarea[1]}`;
    selectCodigo.appendChild(opcion);

    contenedor.appendChild(tareaElemento);
  });
}

// Función para crear una nueva categoría
function crearNuevaCategoria() {
  // Obtener los valores de los campos de entrada
  var nombreCategoria = document.getElementById("nombreCategoria").value;
  var descripcionCategoria = document.getElementById("descripcionCategoria").value;

  // Validar que se haya ingresado un nombre de categoría
  if (nombreCategoria.trim() === "") {
    alert("Por favor ingrese un nombre de categoría.");
    return;
  }

  // Crear un nuevo elemento div para la categoría
  var nuevaCategoria = document.createElement("div");
  nuevaCategoria.classList.add("categoria");
  
  // Crear elementos para mostrar el nombre y la descripción de la categoría
  var nombreElemento = document.createElement("h3");
  nombreElemento.textContent = nombreCategoria;
  
  var descripcionElemento = document.createElement("p");
  descripcionElemento.textContent = descripcionCategoria;

  // Agregar los elementos al div de la nueva categoría
  nuevaCategoria.appendChild(nombreElemento);
  nuevaCategoria.appendChild(descripcionElemento);

  // Agregar la nueva categoría al contenedor de categorías
  var contenedorCategorias = document.getElementById("contenedorCategorias");
  contenedorCategorias.appendChild(nuevaCategoria);

  // Limpiar los campos de entrada después de crear la categoría
  document.getElementById("nombreCategoria").value = "";
  document.getElementById("descripcionCategoria").value = "";

  alert("Nueva categoría creada exitosamente.");
}


document.addEventListener("DOMContentLoaded", mostrarTareas);
function descargarReporteTareas() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Reporte de Tareas", 10, 10);
  let y = 20;

  tareas.forEach((tarea) => {
    let textoTarea = `Código: ${tarea[0]}, Tarea: ${tarea[1]}, Inicio: ${tarea[2]}, Fin: ${tarea[3]}, Estado: ${tarea[4]}`;
    doc.text(textoTarea, 10, y);
    y += 10;
  });

  doc.save("reporte-tareas.pdf");
}




document
  .getElementById("descargarReporte")
  .addEventListener("click", descargarReporteTareas);
document
  .getElementById("descargarReporte")
  .addEventListener("click", descargarReporteTareas);
