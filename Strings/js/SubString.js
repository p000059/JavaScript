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
    
    let words = 'MMMMarcelo Guimbaaaa'
    let subStringResult = words.substring(3, 17)
    
    document.querySelector('#result').innerHTML = subStringResult
}

function clearFields(){
    document.querySelector('#result').innerHTML = ''
}