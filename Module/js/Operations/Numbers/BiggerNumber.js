import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

let array = [15, 113, 89, 47, 200, 2, 300, 1, 12, 26]

document.querySelector('#array-input').value = array

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''

    let resultNumber = 0
    let position = 0

    array.forEach(searchBiggerNumber)

    function searchBiggerNumber(element, index) {
        /* console.log(`Position: ${index} \nElement: ${element}`) */
        if (element > resultNumber) {
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
