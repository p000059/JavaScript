import { createLabel } from '../PublicFunctions/Labels.js'
import { clearFields } from '../PublicFunctions/Clear.js'

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#number').innerHTML = ''
    let number = parseInt(document.querySelector('#number').value)
    let previous = 0
    let current = 1
    let next = 1
    let array = new Array()

    for (let i = 0; i < number; i++) {
        array.push(next)
        previous = current + next
        current = next
        next = previous
    }

    createLabel(document.querySelector('#result').innerHTML = array)
    return array
}