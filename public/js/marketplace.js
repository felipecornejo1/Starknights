window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    let fetch2 = document.getElementById('fetch');

    // Si hay un elemento error-popup
    if(errorPopup) {
        // Agregarle la clase alert-animation y quitarsela despues de 3 segundos
        errorPopup.classList.add('alert-animation');
        setTimeout(() => {errorPopup.classList.remove('alert-animation');}, 3000); 
    }

    //Swiper JS
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                500: {slidesPerView: 2},
                800: {slidesPerView: 3},
                1000: {slidesPerView: 4},
                1300: {slidesPerView: 5},
            }
        });
});