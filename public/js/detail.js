window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    let successPopup = document.querySelector('.success-popup');
    let btnCarrito = document.querySelector('#btn-carrito');
    let itemId = document.querySelector('.item-id');
    
    if(errorPopup) {
        errorPopup.classList.add('error-animation');
        setTimeout(() => {errorPopup.classList.remove('error-animation');}, 3000); 
    }
    if(successPopup) {
        successPopup.classList.add('error-animation');
        setTimeout(() => {successPopup.classList.remove('error-animation');}, 3000); 
    }

    btnCarrito.addEventListener('click', function() {
        //console.log(itemId.innerText);
        fetch("https://starknights-api.herokuapp.com/items/" + itemId.innerText)
            .then(res => {
                return res.json();
            })
            .then(item => {
                localStorage.setItem('carrito' + item.data[0].id, item.data[0].id);
            })
    })
})

