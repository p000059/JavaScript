import { createLabel } from '../PublicFunctions/Labels.js'

let array = [15, 113, 300, 89, 47, 200, 2, 1, 12, 26]

document.querySelector('#array-input').value = array

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', () => clearFields())

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''

    let resultNumber = 0
    let position = 0

    array.forEach(searchSmallNumber)

    function searchSmallNumber(element, index) {
        if (array[element] > element) {
            resultNumber = element
            position = index
        }
    }

    createLabel(document.querySelector('#result').innerHTML = `<br/>Array Position: ${position} <br/>Array Element: ${resultNumber}`)
    return resultNumber
}

function clearFields(){
    document.querySelector('#result').innerHTML = ''
}

