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

    btnCarrito.addEventListener('click', function() {
        localStorage.setItem('carrito' + itemId.innerText, itemId.innerText);
    })
})