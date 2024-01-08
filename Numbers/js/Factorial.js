import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'
import { clearFields } from '/JavaScript/Module/js/Publics/clearNumbers.js'

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#number').innerHTML = ''
    let number = parseInt(document.querySelector('#number').value)
    let resultNumber = number

    for (let i = (number - 1); i > 0; i--) {
        resultNumber = resultNumber * i
    }
    createLabel(document.querySelector('#result').innerHTML = resultNumber)
    return resultNumber
}