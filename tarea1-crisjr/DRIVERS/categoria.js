// Define la clase Categoria
class Categoria {
    constructor(nombre, descripcion) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.tareas = [];
    }
  }
  
  // Array para almacenar categorías
  let categorias = [];
  
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
  
    // Crear una nueva instancia de Categoria
    const nuevaCategoria = new Categoria(nombreCategoria, descripcionCategoria);
  
    // Agregar la nueva categoría al array de categorías
    categorias.push(nuevaCategoria);
  
    // Limpiar los campos de entrada después de crear la categoría
    document.getElementById("nombreCategoria").value = "";
    document.getElementById("descripcionCategoria").value = "";
  
    alert("Nueva categoría creada exitosamente.");
  }
  
  // Función para crear una nueva tarea
  function crearNuevaTarea() {
    // Obtener los valores de los campos de entrada
    var nombreTarea = document.getElementById("nombreTarea").value;
    var horaInicio = document.getElementById("horaInicio").value;
    var horaFin = document.getElementById("horaFin").value;
    var categoriaSeleccionada = document.getElementById("selectCategoria").value;
  
    // Validar que se haya seleccionado una categoría
    if (categoriaSeleccionada === "") {
      alert("Por favor seleccione una categoría para la tarea.");
      return;
    }
  
    // Crear una nueva tarea
    var nuevaTarea = [nombreTarea, horaInicio, horaFin];
  
    // Encontrar la categoría correspondiente y agregar la tarea a su lista de tareas
    var categoria = categorias.find(categoria => categoria.nombre === categoriaSeleccionada);
    if (categoria) {
      categoria.tareas.push(nuevaTarea);
      alert("Nueva tarea creada exitosamente y almacenada en la categoría seleccionada.");
    } else {
      alert("No se encontró la categoría seleccionada.");
    }
  }
S  