import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

const arrayEven = [2,4,6,8,10,12,14,16,18,20]
const array = [2,4,6,8,10,12,14,16,18,19,20]
document.querySelector('#array').value = `[${array}]` 

const execute = document.querySelector('#execute')
execute.addEventListener('click', (event)=>showArray(event))

function showArray(event){
    event.stopPropagation()
    event.preventDefault()
    let number = array.every((number)=> number % 2 === 0)
    console.log(number)
    
    createLabel(document.querySelector('#result').innerHTML = `Result: ${number}`)
}

const clearResult = document.querySelector('#clear-result')
clearResult.addEventListener('click', function(){
    document.querySelector('#result').innerHTML = ''
})
