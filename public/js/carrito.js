window.addEventListener('load', () => {
    let productosSeleccionados = document.querySelector('.productos_seleccionados');
    var loader = document.querySelector('.lds-ellipsis');

    // Traer los valores de carrito en localStorage
    let carrito = localStorage.getItem('carrito');
    // Si hay algo guardado
    if(carrito){
        // Dividir el string obtenido por cada guion que tenga
        let split = carrito.split('-');
        // Convertir los strings del array obtenido en Ints
        let carritoParsed = split.map(i => {
            return parseInt(i);
        });
        console.log(carritoParsed);
        // Crear variable Items vacia
        var items = [];
        // Funcion asíncrona para poder esperar resultados
        async function conseguirItems(){
            // Por cada int en el array obtenido
            for(let i of carritoParsed){
                // Otra funcion asincrona
                async function look(){
                    // Esperar a que se termine cada fetch antes de seguir iterando sobre el array
                    await fetch('https://starknights-api.herokuapp.com/items/' + i)
                        .then(response => {
                            return response.json();
                        })
                        .then(item => {
                            // Añadir los datos del item buscado a la variable items
                            items.push(item.data[0]);
                            console.log(i);
                        })
                }
                // Ejecutar la funcion y hacer que espere a que se termine antes de seguir iterando
                await look();
            };
            console.log(items);
            let divs = items.map(item => {
                if(item.typeFK == 1) {
                    return `<div class= "productos" target="${item.id}">
                        <div class="item-id">${item.id}</div>
                        <img src= "/img/items/spaceships/${item.picture}"> </img>                    
                        <div class="precio-descuento-descripcion-remover">
                            <p>Ξ   ${item.price}</p>
                            <p>${item.name}</p>
                            <button class="remove-btn"> Remover </button> 
                        </div>
                    </div>`
                } else if(item.typeFK == 2) {
                    return `<div class= "productos" target="${item.id}">
                        <img src= "/img/items/weapons/${item.picture}"> </img>                    
                        <div class="precio-descuento-descripcion-remover">
                            <p>Ξ   ${item.price}</p>
                            <p>${item.name}</p>
                            <button class="remove-btn"> Remover </button> 
                        </div>
                    </div>`
                } else if(item.typeFK == 3) {
                    return `<div class= "productos" target="${item.id}">
                        <img src= "/img/items/armor/${item.picture}"> </img>                    
                        <div class="precio-descuento-descripcion-remover">
                            <p>Ξ   ${item.price}</p>
                            <p>${item.name}</p>
                            <button class="remove-btn"> Remover </button> 
                        </div>
                    </div>`
                } else if(item.typeFK == 4) {
                    return `<div class= "productos" target="${item.id}">
                        <img src= "/img/items/pets/${item.picture}"> </img>                    
                        <div class="precio-descuento-descripcion-remover">
                            <p>Ξ   ${item.price}</p>
                            <p>${item.name}</p>
                            <button class="remove-btn> Remover </button> 
                        </div>
                    </div>`
                } else if(item.typeFK == 5) {
                    return `<div class= "productos" target="${item.id}">
                        <img src= "/img/items/passes/${item.picture}"> </img>                    
                        <div class="precio-descuento-descripcion-remover">
                            <p>Ξ   ${item.price}</p>
                            <p>${item.name}</p>
                            <button class="remove-btn"> Remover </button> 
                        </div>
                    </div>`
                }
            });
            loader.style.display = 'none'
            divs.map(div => {
                productosSeleccionados.innerHTML += div;
            });
            console.log(divs);
            let removeBtn = document.querySelectorAll('.remove-btn');


            removeBtn.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    // Eliminar el item de localStorage
                    let removeId = e.target.parentElement.parentElement.getAttribute('target');
                    if(carrito.includes('-')){
                        var split = carrito.split('-');
                    }
                    else {
                        var split = [carrito]
                    }
                    let carritoParsed = split.map(i => {
                        return parseInt(i);
                    });
                    carritoParsed = carritoParsed.filter((value, index, arr) => {
                        return value != removeId;
                    })
                    console.log(carritoParsed);
                    let carritoString = ""
                    carritoParsed.forEach(i => {
                        console.log('i = ' + i);
                        if(carritoString == "") {
                            carritoString = `${i}`
                        }
                        else {
                            carritoString = carritoString + '-' + i
                        }
                    })
                    if(!carritoString == ""){
                        localStorage.setItem('carrito', carritoString)
                    }
                    else {
                        localStorage.removeItem('carrito')
                        productosSeleccionados.innerHTML = `
                            <div class="cartel-error no-margin">
                                <h1>Tu carrito está vacío</h1>
                            </div>
                        `
                    }
                    carrito = carritoString
                    // Mostrar alerta de item eliminado y eliminar el div de la vista
                    let popup = document.createElement('div');
                    popup.innerHTML = `
                        <p>Has eliminado este item</p>
                    `;
                    popup.classList.add('error-popup');
                    popup.classList.add('alert-animation');
                    productosSeleccionados.appendChild(popup)
                    setTimeout(() => {popup.classList.remove('alert-animation');}, 3000);
                    e.target.parentElement.parentElement.remove();
                });
            });
        }
        // Ejecutar todo lo anterior
        conseguirItems()
    }
    else {
        loader.style.display = "none"
        productosSeleccionados.innerHTML = `
            <div class="cartel-error no-margin">
                <h1>Tu carrito está vacío</h1>
            </div>
        `
    }

})
