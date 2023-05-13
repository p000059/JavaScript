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
    let array = new Array()
    for (let i = 0; i <= number; i++) {
        if ((number > 0) && ((i === 2) || (i % 2 === 1))) {
            array.push(i)
        }
    }
    createLabel(document.querySelector('#result').innerHTML = array)
    return array
}