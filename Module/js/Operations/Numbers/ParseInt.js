import { createLabel } from '../PublicFunctions/Labels.js'

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''

    
    let numberOne = Number.parseInt(document.querySelector('#number-one').value)
    let numberTwo = Number.parseInt(document.querySelector('#number-two').value)

    let resultNumber = function () {
        return ((numberOne > numberTwo) ? numberOne : numberTwo)
    }

    createLabel(document.querySelector('#result').innerHTML = `<br/>The biggest number is: ${resultNumber()}`)
    return resultNumber
}

function clearFields() {
    document.querySelector('#number-one').value = ''
    document.querySelector('#number-two').value = ''
    document.querySelector('#result').innerHTML = ''
}
