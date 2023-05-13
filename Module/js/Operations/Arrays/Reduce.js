import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

let array = [300, 80, 113, 47, 200, 113, 2, 1, 113, 12, 113, 26, 113, 15, 113, 598, 23]

document.querySelector('#array').value = array


let execute = document.querySelector('#execute')
execute.addEventListener('click', () => showResult())

function showResult() {
    const proposedValue = Number.parseInt(document.querySelector('#proposed-value').value)
    const sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, proposedValue)
    createLabel(document.querySelector('#result').innerHTML = `Sum: ${sum}`)
    return sum
}