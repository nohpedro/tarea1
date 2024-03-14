function agregarNuevoAtributoATarea(codigoTarea, nuevoAtributo, valorNuevoAtributo) {
    const tareaEncontrada = tareas.find(tarea => tarea.codigo === codigoTarea);
  
    if (tareaEncontrada) {
      tareaEncontrada[nuevoAtributo] = valorNuevoAtributo;
      console.log(`Se agregó el atributo '${nuevoAtributo}' con el valor '${valorNuevoAtributo}' a la tarea con código ${codigoTarea}.`);
    } else {
      console.log(`No se encontró ninguna tarea con el código ${codigoTarea}.`);
    }
  }
  
  
  console.log(tareas.find(tarea => tarea.codigo === 1));
  