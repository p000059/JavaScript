import { createLabel } from '../PublicFunctions/Labels.js'
import { clearFields } from '../PublicFunctions/Clear.js'

var execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').innerHTML = ''
    let words = document.querySelector('#words').value
    let firstCaracter = words.substring(0, 1)
    createLabel(document.querySelector('#result').innerHTML = firstCaracter)
}
