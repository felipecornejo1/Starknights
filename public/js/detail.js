window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    let successPopup = document.querySelector('.success-popup');
    let btnCarrito = document.querySelector('#btn-carrito');
    let carrito = localStorage.getItem('carrito');
    let itemId = document.querySelector('.art-img').getAttribute('target');
    let sellBtn = document.querySelector('#sell');
    let sellModal = document.querySelector('#sell-item');
    let overlay = document.querySelector('#overlay');
    let titlePen = document.querySelector('#title-pen');
    let titleModal = document.querySelector('#edit-title');
    let pricePen = document.querySelector('#price-pen');
    let priceModal = document.querySelector('#edit-price');
    
    
    if(carrito){
        // Dividir la string obtenida por cada guion que haya
        var split = carrito.split('-');
        if(split.includes(itemId)){
            btnCarrito.innerText = 'Añadido'
        }
    }
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
            // En caso de ya haber datos en localStorage
            if(carrito){
                // En caso de que el id seleccionado no se encuentre en este array
                if(!split.includes(itemId)){
                    // Crear una variable con el valor anterior, agregarle un guion y el id del item seleccionado y subirlo a localStorage
                    let carritoNuevo = carrito + '-' + itemId
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
                localStorage.setItem('carrito', itemId);
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

    if(pricePen) {
        pricePen.addEventListener('click', () => {
            overlay.classList.add('active');
            document.querySelector('html').style.overflowY = 'hidden'
            priceModal.classList.add('active');
        })
        overlay.addEventListener('click', () => {
            priceModal.classList.remove('active');
        })
    }
    
    if(titlePen) {
        titlePen.addEventListener('click', () => {
            overlay.classList.add('active');
            document.querySelector('html').style.overflowY = 'hidden'
            titleModal.classList.add('active');
        })
        overlay.addEventListener('click', () => {
            titleModal.classList.remove('active');
        })
    }
});