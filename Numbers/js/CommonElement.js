import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'
/* import { clearFields } from '/JavaScript/Module/js/Publics/clearNumbers.js' */

let array = function () {
    let array = [300, 89, 113, 47, 200, 113, 2, 1, 113, 12, 113, 26, 113, 15, 113, 598, 23]
    return array
}

document.querySelector('#array-input').value = `[ ${array()} ]`

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event, array()))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event, array) {
    clearFields(event)

    let element = array[0]
    let number = 1
    let count = {}

    for (let i of array) {
        if (!count[i]) {
            count[i] = 1
        } else {
            count[i]++
        }

        if (count[i] > number) {
            number = count[i]
            element = i
        }
    }

    createLabel(document.querySelector('#result').innerHTML = `<br/>Total: ${number} <br/>Element: ${element}`)
    return array
}

function clearFields(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''
}
