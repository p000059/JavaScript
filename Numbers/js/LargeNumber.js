import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'
import { clearFields } from '/JavaScript/Module/js/Publics/clearNumbers.js'

let largeNumber = 1_000_000
document.querySelector('#number').value = largeNumber

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#number').innerHTML = ''
    let number = parseInt(document.querySelector('#number').value)
    console.log(number)
    createLabel(document.querySelector('#result').innerHTML = number)
}