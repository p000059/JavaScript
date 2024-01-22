"use strict"

document.addEventListener('DOMContentLoaded', function(){

    let execute = document.querySelector('#execute')
    execute.addEventListener('click', showResult)
    
    let clear = document.querySelector('#clear')
    clear.addEventListener('click', clearFields)
})


function showResult(event) {
    
    event.preventDefault()
    event.stopPropagation()
    
    document.querySelector('#result').innerHTML = ''
    
    let words = document.querySelector('#words').value
    let stringUpper = words.toUpperCase()
    
    document.querySelector('#result').innerHTML = stringUpper
}

function clearFields(){
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}