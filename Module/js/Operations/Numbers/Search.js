import { createLabel } from '../PublicFunctions/Labels.js'
import { clearFields } from '../PublicFunctions/Clear.js'

let array = [15, 8, 4, 89, 47, 5, 12, 26]

document.querySelector('#array-input').value = array

let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#number').innerHTML = ''
    
    let number = parseInt(document.querySelector('#number').value)
    let resultNumber = 0
    let position = 0

    resultNumber = array.find((element, index) => {
        if(element === number){
            position = index
        }
        return element === number
    })
   
    createLabel(document.querySelector('#result').innerHTML = `<br/>Array Position: ${position} <br/>Array Element: ${resultNumber}`)
    return resultNumber
}
