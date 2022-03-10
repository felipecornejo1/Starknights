window.addEventListener('load', () => {
    let botonCuenta = document.querySelector('#boton-cuenta');
    let dropdown = document.querySelector('.dropdown');

    botonCuenta.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    })
})