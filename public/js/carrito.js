window.addEventListener('load', () => {
    // consultar local storage y crear un item por cada objeto del array
    let productosSeleccionados = document.querySelector('.productos_seleccionados');

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
        }
        // Ejecutar todo lo anterior
        conseguirItems()
        // agregame los 6 items a la vista
        let divs = items.map(item => {
            if(item.typeFK == 1) {
                return `<div class= "productos">
                    <img src= "/img/items/spaceships/${item.picture}"> </img>                    
                    <div class="precio-descuento-descripcion-remover">
                        <p>${item.price}</p>
                        <p>${item.name}</p>
                        <button> Remover </button> 
                    </div>
                </div>`
            } else if(item.typeFK == 2) {
                return `<div class= "productos">
                    <img src= "/img/items/spaceships/${item.picture}"> </img>                    
                    <div class="precio-descuento-descripcion-remover">
                        <p>${item.price}</p>
                        <p>${item.name}</p>
                        <button> Remover </button> 
                    </div>
                </div>`
            } else if(item.typeFK == 3) {
                return `<div class= "productos">
                    <img src= "/img/items/spaceships/${item.picture}"> </img>                    
                    <div class="precio-descuento-descripcion-remover">
                        <p>${item.price}</p>
                        <p>${item.name}</p>
                        <button> Remover </button> 
                    </div>
                </div>`
            } else if(item.typeFK == 4) {
                return `<div class= "productos">
                    <img src= "/img/items/spaceships/${item.picture}"> </img>                    
                    <div class="precio-descuento-descripcion-remover">
                        <p>${item.price}</p>
                        <p>${item.name}</p>
                        <button> Remover </button> 
                    </div>
                </div>`
            } else if(item.typeFK == 5) {
                return `<div class= "productos">
                    <img src= "/img/items/spaceships/${item.picture}"> </img>                    
                    <div class="precio-descuento-descripcion-remover">
                        <p>${item.price}</p>
                        <p>${item.name}</p>
                        <button> Remover </button> 
                    </div>
                </div>`
            }
        })
    }

})
[{nombre, precio, owner, }, {}, {}]