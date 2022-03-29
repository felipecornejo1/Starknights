window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');

    // Si hay un elemento error-popup
    if(errorPopup) {
        // Agregarle la clase alert-animation y quitarsela despues de 3 segundos
        errorPopup.classList.add('alert-animation');
        setTimeout(() => {errorPopup.classList.remove('alert-animation');}, 3000); 
    }
});