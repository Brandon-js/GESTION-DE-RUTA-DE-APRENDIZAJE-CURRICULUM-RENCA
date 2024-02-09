const bodySelect = document.querySelector('body');
const navSelect = document.querySelector('header');
const moonBtn = document.getElementById('moon-btn');
const sunBtn = document.getElementById('sun-btn');
const cardsSelect = document.querySelectorAll('.card')



/*INICIO BOTON LOGIN*/

document.getElementById('log-btn').addEventListener('click', function() {
    // Crea una instancia del modal de inicio de sesión y lo muestra
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
    myModal.show();
});

/*FIN BOTON*/

// Dark Mode
function lightMode() {
    bodySelect.classList.remove('dark-mode')
    bodySelect.classList.add('light-mode')

    navSelect.classList.remove('dark-mode')
    navSelect.classList.add('light-mode')

    sunBtn.classList.add('light-mode-btn')
    moonBtn.classList.remove('dark-mode-btn')

    cardsSelect.forEach(card => {
        card.classList.add('light-mode-card')
        card.classList.remove('dark-mode-card')
    })

}

function darkMode() {
    bodySelect.classList.remove('light-mode')
    bodySelect.classList.add('dark-mode')

    navSelect.classList.add('dark-mode')
    navSelect.classList.remove('light-mode')

    moonBtn.classList.add('dark-mode-btn')
    sunBtn.classList.remove('light-mode-btn')

    cardsSelect.forEach(card => {
        card.classList.add('dark-mode-card')
        card.classList.remove('light-mode-card')
    })

}

