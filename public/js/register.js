window.addEventListener('load', () => {

    let form = document.querySelector('.formulario-register');

    let nameInput = document.querySelector('#reg-input-name')
    let nameError = document.querySelector('#name-error');

    let emailInput = document.querySelector('#reg-input-email');
    let emailError = document.querySelector('#email-error');

    let passwordInput = document.querySelector('#reg-input-password');
    let passwordError = document.querySelector('#password-error');

    let casillas = document.querySelectorAll('.casillas');
    let button = document.querySelector('#btn-register');

    
    form.addEventListener('keyup', () => {
        if(nameInput.value.length > 0 && emailInput.value.length > 0 && passwordInput.value.length > 0){
            button.classList.add('form-filled');
        }

        if(nameInput.value.length == 0 || emailInput.value.length == 0 || passwordInput.value.length == 0) {
            button.classList.remove('form-filled');
        }
    });

    form.addEventListener('submit', (event) => {

        if(button.classList.contains('form-filled')){
            // Validaciones del nombre de usuario
            if(nameInput.value.length == 0){
                event.preventDefault();
                nameError.innerText = 'Debes ingresar un nombre de usuario';
                nameError.classList.add('active');
                nameInput.classList.add('error');
            }
            else {
                nameError.classList.remove('active');
                nameInput.classList.remove('error');
            }
            // Validaciones del email
                // Campo Vacio
            if(emailInput.value.length == 0){
                event.preventDefault();
                emailError.classList.add('active');
                emailInput.classList.add('error');
            }
            else {
                emailError.classList.remove('active');
                emailInput.classList.remove('error');
            }
                // Formato Válido
            let comSplit = emailInput.value.split('.com');
            let atSignSplit = comSplit[0].split('@')
            if(comSplit.length <= 1) {
                event.preventDefault();
                emailError.classList.add('active');
                emailError.innerText = 'El formato del correo electrónico no es válido'
                emailInput.classList.add('error');
            }
            else if(atSignSplit.length != 2){
                event.preventDefault();
                emailError.classList.add('active');
                emailError.innerText = 'El formato del correo electrónico no es válido'
                emailInput.classList.add('error');
            }
            else {
                emailError.classList.remove('active');
                emailInput.classList.remove('error');
            }
            // Validaciones de la contraseña
            if(passwordInput.value.length < 6){
                event.preventDefault();
                passwordError.innerText = 'La contraseña debe contener al menos 6 caracteres';
                passwordError.classList.add('active');
                passwordInput.classList.add('error');
            }
            else {
                passwordError.classList.remove('active');
                passwordInput.classList.remove('error');
            }
        }
        else {
            event.preventDefault();
        }
    });

    // Eliminar la clase error de una casilla cuando se escriba nuevamente sobre ella
    casillas.forEach(casilla => {
        casilla.addEventListener('keydown', () => {
            casilla.classList.remove('error')
        })
    })
});