let tareas = [
    [1, "Levantarse", "08:00", "10:00", "Activa"],
    [2, "Comer", "10:00", "12:00", "Por Iniciar"],
    [3, "Hacer deberes", "12:00", "14:00", "En Progreso"],
    [4, "Ejercicio", "12:20", "14:00", "En Progreso"],
  ];
  
  let tareaEditando = null;
  
  function editarTarea() {
    const selectCodigo = document.getElementById("codigoTarea");
    const codigo = selectCodigo.value;
  
    // Buscar y seleccionar la tarea para edición
    tareaEditando = tareas.find((tarea) => tarea[0] == codigo);
  
    // Mostrar los valores actuales en los campos de edición
    document.getElementById("editNombre").value = tareaEditando[1];
    document.getElementById("editHoraInicio").value = tareaEditando[2];
    document.getElementById("editHoraFin").value = tareaEditando[3];
    document.getElementById("editEstado").value = tareaEditando[4];
  }
  
  function eliminarTarea() {
    const codigo = parseInt(document.getElementById("codigoTarea").value);
    const indiceTarea = tareas.findIndex(tarea => tarea[0] === codigo);
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