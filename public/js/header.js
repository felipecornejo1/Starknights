window.addEventListener('load', () => {

    let html = document.querySelector('html');
    let botonCuenta = document.querySelector('#boton-cuenta');
    let dropdown = document.querySelector('.dropdown');
    let dropdownButton = document.querySelector('.dropdown-btn');
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.ctn-menu');
    let overlay = document.querySelector('#overlay');

    let balance = document.querySelector('.balance');
    let userId = document.querySelector('#user-id');


    botonCuenta.addEventListener('click', () => {
        dropdown.classList.toggle('active');
        dropdownButton.classList.toggle('rotate-180')
    });

    hamburger.addEventListener('click', () => {
        overlay.classList.add('active');
        menu.classList.add('active');
        html.style.overflowY = 'hidden'
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        html.style.overflowY = 'visible'
    });

    if(window.innerWidth<830){
        dropdown.classList.add('active');
    }
    
    
    /* if(userId) {
        setInterval(function(){
            fetch('https://starknights.herokuapp.com/api/users/' + userId.innerText)
                .then(function(response){
                    return response.json();
                })
                .then(function(user){
                    balance.innerText = user.data[0].wallet_balance;
                })
        }, 2000
        )
    } */
});