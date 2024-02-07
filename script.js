const bodySelect = document.querySelector('body')
const navSelect = document.querySelector('header')


/*INICIO BOTON LOGIN*/

document.getElementById('log-btn').addEventListener('click', function() {
    // Crea una instancia del modal de inicio de sesión y lo muestra
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'));
    myModal.show();
});

/*FIN BOTON*/

function lightMode() {
    bodySelect.classList.remove('dark-mode')
    bodySelect.classList.add('light-mode')

    navSelect.classList.remove('dark-mode')
    navSelect.classList.add('light-mode')
}

function darkMode() {
    bodySelect.classList.remove('light-mode')
    bodySelect.classList.add('dark-mode')

    navSelect.classList.add('dark-mode')
    navSelect.classList.remove('light-mode')
}