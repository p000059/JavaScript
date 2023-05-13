import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'
import { clearFields } from '/JavaScript/Module/js/Publics/clearNumbers.js'

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''

    let number = document.querySelector('#number').value

    let resultNumber =  number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(resultNumber)

    createLabel(document.querySelector('#result').innerHTML = `<br/>The Locale number is: ${resultNumber}`)
    return resultNumber
}

