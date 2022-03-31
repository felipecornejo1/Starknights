window.addEventListener('load', () => {
    let form = document.querySelector('.formulario-login');

    let nameInput = document.querySelector('#login-username');
    let nameError = document.querySelector('#username-error');
    let nameMatchError = document.querySelector('#username-match-error');

    let passwordInput = document.querySelector('#login-password');
    let passwordError = document.querySelector('#password-error');
    let passwordMatchError = document.querySelector('#password-match-error');


    let casillas = document.querySelectorAll('.casillas-login');

    form.addEventListener('submit', (event) => {
        // Validaciones del nombre de usuario
        if(nameInput.value.length == 0){
            console.log(nameInput.value.length);
            event.preventDefault();
            nameError.innerText = 'Debes ingresar un nombre de usuario';
            nameError.classList.add('active');
            nameInput.classList.add('error');
            nameMatchError.style.display = 'none';
        }
        else {
            nameError.classList.remove('active');
            nameInput.classList.remove('error');
        }
        // Validaciones de la contraseña
        if(passwordInput.value.length == 0){
            event.preventDefault();
            passwordError.innerText = 'Debes ingresar una contraseña';
            passwordError.classList.add('active');
            passwordInput.classList.add('error');
            passwordMatchError.style.display = "none";
        }
        else {
            passwordError.classList.remove('active');
            passwordInput.classList.remove('error');
        }
    });

    casillas.forEach(casilla => {
        casilla.addEventListener('keydown', () => {
            casilla.classList.remove('error')
        })
    })
});