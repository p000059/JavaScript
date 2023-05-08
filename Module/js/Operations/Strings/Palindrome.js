import { createLabel } from '../PublicFunctions/Labels.js';
import { clearFields } from '../PublicFunctions/Clear.js';

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''
    let words = document.querySelector('#words').value.toLowerCase()
    let inversion = words.split('').reverse().join('').toLowerCase()
    let test = (words === inversion) ? true : false

    createLabel(document.querySelector('#result').innerHTML = `Word: ${words}; <br/>Invert: ${inversion}; <br/>Palindrome? ${test}`)
}
