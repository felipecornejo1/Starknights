window.addEventListener('load', () => {
    let route = window.location.pathname
    let tab = route.split('/')[3];

    let containers = document.querySelectorAll('.acc-menu-ctn');
    
    let accountBtn = document.querySelector('#acc-menu-account');
    let inventoryBtn = document.querySelector('#acc-menu-inventory');
    let activityBtn = document.querySelector('#acc-menu-activity');
    let settingsBtn = document.querySelector('#acc-menu-settings');

    if(tab == 'account') {
        accountBtn.classList.add('tab-selected');
    }
    else if(tab == 'inventory') {
        inventoryBtn.classList.add('tab-selected');
    }
    else if(tab == 'activity') {
        activityBtn.classList.add('tab-selected');
    }
    else if(tab == 'settings') {
        settingsBtn.classList.add('tab-selected');
    }

    containers.forEach(container => {
        container.addEventListener('click', () => {
            container.classList.add('tab-selected')
        })
    })

});