const { BelongsToMany } = require("sequelize/types");

window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    let successPopup = document.querySelector('.success-popup');
    
    // Si hay un elemento error-popup
    if(errorPopup) {
        // Agregarle la clase alert-animation y quitársela después de 3 segundos
        errorPopup.classList.add('alert-animation');
        setTimeout(() => {errorPopup.classList.remove('alert-animation');}, 3000); 
    }
    // Hacer lo mismo si hay un elemento success-popup
    if(successPopup) {
        successPopup.classList.add('alert-animation');
        setTimeout(() => {successPopup.classList.remove('alert-animation');}, 3000); 
    }
});