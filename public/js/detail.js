window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    let successPopup = document.querySelector('.success-popup');
    let btnCarrito = document.querySelector('#btn-carrito');
    let itemId = document.querySelector('.item-id');
    let sellBtn = document.querySelector('#sell');
    let sellModal = document.querySelector('.modal-sell');
    let overlay = document.querySelector('#overlay');

    
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
    if(btnCarrito){
        btnCarrito.addEventListener('click', function(e) {
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
                    let popup = document.createElement('div');
                    popup.classList.add('success-popup');
                    popup.classList.add('alert-animation');
                    popup.innerHTML = `
                        <p>Has añadido este item al carrito</p>
                    `;
                    document.querySelector('body').appendChild(popup)
                    setTimeout(() => {popup.classList.remove('alert-animation');}, 3000);
                    e.target.innerText = 'Añadido'
                } else {
                    let popup = document.createElement('div');
                    popup.classList.add('error-popup');
                    popup.classList.add('alert-animation');
                    popup.innerHTML = `
                        <p>Ya añadiste este item al carrito</p>
                    `;
                    document.querySelector('body').appendChild(popup)
                    setTimeout(() => {popup.classList.remove('alert-animation');}, 3000);
                    e.target.innerText = 'Añadido'
                }
            }
            // En caso de no haber nada en localStorage, crear una key 'carrito' con el id del item seleccionado
            else {
                let popup = document.createElement('div');
                    popup.classList.add('success-popup');
                    popup.classList.add('alert-animation');
                    popup.innerHTML = `
                        <p>Has añadido este item al carrito</p>
                    `;
                    document.querySelector('body').appendChild(popup)
                    setTimeout(() => {popup.classList.remove('alert-animation');}, 3000);
                    e.target.innerText = 'Añadido'
                localStorage.setItem('carrito', itemId.innerText);
            }
        });
    }

    // Botón Vender 
    if(sellBtn){
        sellBtn.addEventListener('click', () => {
            overlay.classList.add('active');
            document.querySelector('html').style.overflowY = 'hidden'
            sellModal.classList.add('active');
        })
        overlay.addEventListener('click', () => {
            sellModal.classList.remove('active');
        })
    }
});