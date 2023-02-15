let arrayData = new Array();

const id_register = document.getElementById('id-register')
id_register.addEventListener('click', () => registerArray())


let clear = document.getElementById('clear')
clear.addEventListener('click', () => clearFields())

function clearFields() {
    document.getElementById('email').value = ''
    document.getElementById('pwd').value = ''
}