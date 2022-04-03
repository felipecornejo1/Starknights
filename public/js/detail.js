window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    let successPopup = document.querySelector('.success-popup');
    let btnCarrito = document.querySelector('#btn-carrito');
    let itemId = document.querySelector('.item-id');
    
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

    // AL hacer click en Añadir al Carrito
    btnCarrito.addEventListener('click', function() {
        let carrito = localStorage.getItem('carrito');
        // En caso de ya haber datos en localStorage
        if(carrito){
            // Dividir la string obtenida por cada guion que haya
            let split = carrito.split('-');
            // En caso de que el id seleccionado no se encuentre en este array
            if(!split.includes(itemId.innerText)){
                // Crear una variable con el valor anterior, agregarle un guion y el id del item seleccionado y subirlo a localStorage
                let carritoNuevo = carrito + '-' + itemId.innerText
                localStorage.setItem('carrito', carritoNuevo);
            }
        }
        // En caso de no haber nada en localStorage, crear una key 'carrito' con el id del item seleccionado
        else {
            localStorage.setItem('carrito', itemId.innerText);
        }
    });
});