// Obtener elementos del DOM
const btnGuardarContinuar = document.getElementById("guardar-continuar");
const modal = document.getElementById("modal");
const btnCerrarModal = document.getElementById("cerrar-modal");

// Validar si todos los campos del formulario están completos
function validarFormulario() {
    const formulario = document.getElementById("datos-personales");
    const inputs = formulario.querySelectorAll("input, textarea");

    // Recorremos todos los campos del formulario
    for (let input of inputs) {
        if (input.value === "") {
            alert("Todos los campos son obligatorios. Por favor, completa todos los campos.");
            return false; // Si algún campo está vacío, no se permite continuar
        }
    }

    return true; // Si todos los campos están completos, el formulario es válido
}

// Mostrar el modal cuando se hace clic en "Guardar y Continuar"
btnGuardarContinuar.addEventListener("click", () => {
    if (validarFormulario()) {
        modal.style.display = "flex";
    }
});

// Cerrar el modal cuando se hace clic en el botón "Cerrar"
btnCerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});
