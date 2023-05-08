import { createLabel } from "../PublicFunctions/Labels.js"
import { clearFields } from '../PublicFunctions/Clear.js'

var execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

var clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').innerHTML = ''
    let words = 'MMMMarcelo Guimbaaaa'
    let subStringResult = words.substring(3, 17)
    createLabel(document.querySelector('#result').innerHTML = subStringResult)
}
