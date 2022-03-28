window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    errorPopup.classList.add('error-animation');
    setTimeout(() => {errorPopup.classList.remove('error-animation');}, 3000); 
});