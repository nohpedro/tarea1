document.addEventListener("DOMContentLoaded", function() {
    const inicioBtn = document.getElementById("inicioBtn");
    const agregarTareaBtn = document.getElementById("agregarTareaBtn");
    const verReportesBtn = document.getElementById("verReportesBtn");
    const editarTareaBtn = document.getElementById("editarTareaBtn");
    const contenido = document.getElementById("contenido");

    // Funciones para mostrar el contenido de cada sección
    function mostrarInicio() {
        contenido.innerHTML = "<h2>Página de Inicio</h2><p>Bienvenido al gestor de tareas.</p>";
    }

    function mostrarAgregarTarea() {
        contenido.innerHTML = `
            <h2>Agregar Tarea</h2>
            <form id="formAgregarTarea">
                <label for="nombreTarea">Nombre de la Tarea:</label><br>
                <input type="text" id="nombreTarea" name="nombreTarea"><br>
                <label for="descripcionTarea">Descripción:</label><br>
                <textarea id="descripcionTarea" name="descripcionTarea"></textarea><br>
                <label for="fechaLimite">Fecha Inicio:</label><br>
                <input type="date" id="fechaInicio" name="fechaLimite"><br><br>
                <label for="fechaLimite">Fecha Límite:</label><br>
                <input type="date" id="fechaLimite" name="fechaLimite"><br><br>
                <button type="submit">Agregar Tarea</button>
            </form>
        `;
        
        const formAgregarTarea = document.getElementById("formAgregarTarea");
        
        formAgregarTarea.addEventListener("submit", function(event) {
            event.preventDefault();
            // Aquí puedes agregar la lógica para manejar el envío del formulario
            // Por ejemplo, puedes obtener los valores de los campos del formulario y enviarlos al servidor para agregar la tarea
            const nombreTarea = document.getElementById("nombreTarea").value;
            const descripcionTarea = document.getElementById("descripcionTarea").value;
            const fechaInicio = document.getElementById("fechaInicio").value;
            const fechaLimite = document.getElementById("fechaLimite").value;
    
            // Aquí puedes hacer lo que necesites con los valores de los campos
            console.log("Nombre de la Tarea:", nombreTarea);
            console.log("Descripción:", descripcionTarea);
            console.log("Fecha Inicio:", fechaInicio);
            console.log("Fecha Límite:", fechaLimite);
    
            // Por ahora, solo imprimo los valores en la consola
            // En tu aplicación real, deberás enviar estos datos al servidor y manejar la respuesta
        });
    }
    

    function mostrarVerReportes(tareas) {
        // Comienzas generando el encabezado del reporte
        let reporteHTML = "<h2>Ver Reportes</h2>";
    
        // Verificas si hay tareas disponibles
        if (tareas.length > 0) {
            // Si hay tareas, creas una tabla para mostrarlas
            reporteHTML += "<table>";
            reporteHTML += "<tr><th>Nombre de la Tarea</th><th>Descripción</th><th>Fecha Inicio</th><th>Fecha Límite</th></tr>";
    
            // Iteras sobre cada tarea y la agregas a la tabla
            tareas.forEach(tarea => {
                reporteHTML += `<tr><td>${tarea.nombre}</td><td>${tarea.descripcion}</td><td>${tarea.fechaInicio}</td><td>${tarea.fechaLimite}</td></tr>`;
            });
    
            reporteHTML += "</table>";
        } else {
            // Si no hay tareas, muestras un mensaje indicando que no hay tareas disponibles
            reporteHTML += "<p>No hay tareas disponibles.</p>";
        }
    
        // Insertas el HTML generado en el contenido
        contenido.innerHTML = reporteHTML;
    }
    

    function mostrarEditarTarea() {
        contenido.innerHTML = "<h2>Editar Tarea</h2><p>Aquí puedes editar una tarea existente.</p>";
    }

    // Event Listeners para los botones del menú
    inicioBtn.addEventListener("click", mostrarInicio);
    agregarTareaBtn.addEventListener("click", mostrarAgregarTarea);
    verReportesBtn.addEventListener("click", mostrarVerReportes);
    editarTareaBtn.addEventListener("click", mostrarEditarTarea);

    // Cargar la página de inicio por defecto
    mostrarInicio();
});
