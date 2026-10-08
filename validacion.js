document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formularioRegistro");
    const nombre = document.getElementById("nombre");
    const ci = document.getElementById("ci");
    const contrasena = document.getElementById("contrasena");
    const confirmacion = document.getElementById("confirmacion");
    const mensajeExito = document.getElementById("mensaje-exito");
    const btnLimpiar = document.getElementById("btnLimpiar");


    function mostrarError(elemento, mensaje, idError) {
        elemento.classList.add("input-error");
        document.getElementById(idError).textContent = mensaje;
    }



    function limpiarError(elemento, idError) {
        elemento.classList.remove("input-error");
        document.getElementById(idError).textContent = "";
    }


    function limpiarTodosLosErrores() {
        limpiarError(nombre, "error-nombre");
        limpiarError(ci, "error-ci");
        limpiarError(contrasena, "error-contrasena");
        limpiarError(confirmacion, "error-confirmacion");
        mensajeExito.style.display = "none";
        mensajeExito.textContent = "";
    }


    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); 
        limpiarTodosLosErrores();
        let esValido = true;


        if (nombre.value.trim() === "") {
            mostrarError(nombre, "El nombre no puede estar vacío.", "error-nombre");
            esValido = false;
        }


        if (ci.value.trim() === "") {
            mostrarError(ci, "El CI no puede estar vacío.", "error-ci");
            esValido = false;
        } else if (ci.value.length != 11) {
            mostrarError(ci, "El CI debe tener 11 caracteres.", "error-ci");
            esValido = false;
        } else if (!/^\d+$/.test(ci.value)) {
            mostrarError(ci, "El CI solo debe contener números.", "error-ci");
            esValido = false;
        }


        if (contrasena.value.trim() === "") {
            mostrarError(contrasena, "La contraseña no puede estar vacía.", "error-contrasena");
            esValido = false;
        }


        if (confirmacion.value.trim() === "") {
            mostrarError(confirmacion, "La confirmación no puede estar vacía.", "error-confirmacion");
            esValido = false;
        } else if (contrasena.value !== confirmacion.value) {
            mostrarError(confirmacion, "Las contraseñas no coinciden.", "error-confirmacion");
            esValido = false;
        }


        if (esValido) {
            mensajeExito.textContent = "¡Formulario enviado correctamente! Todos los datos son válidos.";
            mensajeExito.style.display = "block";
            formulario.reset(); 
        }
    });


    btnLimpiar.addEventListener("click", function() {
        limpiarTodosLosErrores();
    });
});