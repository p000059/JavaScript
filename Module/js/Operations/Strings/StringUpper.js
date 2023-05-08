import { createLabel } from '../PublicFunctions/Labels.js';
import { clearFields } from '../PublicFunctions/Clear.js';

var execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''
    let words = document.querySelector('#words').value
    let stringUpper = words.toUpperCase()
    createLabel(document.querySelector('#result').innerHTML = stringUpper)
}
