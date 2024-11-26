// Manejo del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Credenciales predeterminadas
    const username = 'unad';
    const password = '123';

    // Validar credenciales
    if (document.getElementById('username').value === username &&
        document.getElementById('password').value === password) {
        // Redirigir a la página principal
        window.location.href = 'main.html'; // Aquí redirigimos a main.html
    } else {
        alert('Credenciales incorrectas. Por favor, intenta de nuevo.');
    }
});

// Manejo del modal de registro
const registerModal = document.getElementById("registerModal");
const btnRegister = document.getElementById("register");
const spanClose = document.getElementsByClassName("close")[0];

btnRegister.onclick = function() {
    registerModal.style.display = "block"; // Muestra el modal
}

spanClose.onclick = function() {
    registerModal.style.display = "none"; // Cierra el modal
}

window.onclick = function(event) {
    if (event.target == registerModal) {
        registerModal.style.display = "none"; // Cierra el modal si se hace clic fuera de él
    }
}

// Suponiendo que deseas manejar la inscripción
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Aquí puedes agregar la lógica para gestionar el registro, por ejemplo:
    const registerUsername = document.getElementById('registerUsername').value;
    const registerEmail = document.getElementById('registerEmail').value;
    const registerPassword = document.getElementById('registerPassword').value;

    alert(`Usuario registrado: ${registerUsername}, Email: ${registerEmail}`);

    // Cierra el modal después del registro
    registerModal.style.display = "none"; 
});

// Código para abrir y cerrar otro modal, si lo tienes
const openModalButton = document.getElementById('open-form-modal');
const anotherModal = document.getElementById('form-modal'); // Cambia 'modal' por 'anotherModal'
const closeModalButton = document.querySelector('.close-modal');

openModalButton.addEventListener('click', () => {
    anotherModal.classList.add('show');
});

closeModalButton.addEventListener('click', () => {
    anotherModal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === anotherModal) {
        anotherModal.classList.remove('show');
    }
});

// Manejar envío del formulario
const personalInfoForm = document.getElementById('personal-info-form');
personalInfoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Datos guardados correctamente. Ahora puedes subir tu hoja de vida.');
    anotherModal.classList.remove('show'); // Cambia 'modal' por 'anotherModal'
});