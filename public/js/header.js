window.addEventListener('load', () => {
    let botonCuenta = document.querySelector('#boton-cuenta');
    let dropdown = document.querySelector('.dropdown');
    let dropdownButton = document.querySelector('.dropdown-btn');
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.ctn-menu');
    let overlay = document.querySelector('#overlay');

    botonCuenta.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        dropdownButton.classList.toggle('rotate-180')
    });

    hamburger.addEventListener('click', () => {
        overlay.classList.add('active');
        menu.classList.add('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });

    if(window.innerWidth<830){
        dropdown.classList.add('active');
    }
     
});