window.addEventListener('load', () => {
    let errorPopup = document.querySelector('.error-popup');
    let successPopup = document.querySelector('.success-popup');
    
    if(errorPopup) {
        errorPopup.classList.add('error-animation');
        setTimeout(() => {errorPopup.classList.remove('error-animation');}, 3000); 
    }
    if(successPopup) {
        successPopup.classList.add('error-animation');
        setTimeout(() => {successPopup.classList.remove('error-animation');}, 3000); 
    }
})