let protossLink = document.querySelector('.protoss-1')
let terranLink = document.querySelector('.terran-1')
let zergLink = document.querySelector('.zerg-1')

// PROTOSS
protossLink.addEventListener('mouseover', () => {
    protossLink.classList.add('protoss-2');
});

protossLink.addEventListener('click', () => {
    window.location.href = "https://stackoverflow.com/questions/4561097/css-box-shadow-bottom-only";
})

protossLink.addEventListener('mouseout', () => {
    protossLink.classList.add('protoss-1');
    protossLink.classList.remove('protoss-2');
});

// TERRAN
terranLink.addEventListener('mouseover', () => {
    terranLink.classList.add('terran-2');
});

terranLink.addEventListener('click', () => {
    window.location.href = "https://stackoverflow.com/questions/4561097/css-box-shadow-bottom-only";
})

terranLink.addEventListener('mouseout', () => {
    terranLink.classList.add('terran-1');
    terranLink.classList.remove('terran-2');
});

// ZERG
zergLink.addEventListener('mouseover', () => {
    zergLink.classList.add('zerg-2');
    
});

terranLink.addEventListener('click', () => {
    window.location.href = "https://stackoverflow.com/questions/4561097/css-box-shadow-bottom-only";
})

zergLink.addEventListener('mouseout', () => {
    zergLink.classList.add('zerg-1');
    zergLink.classList.remove('zerg-2');
});