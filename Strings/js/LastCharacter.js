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
    let lastCharacter = words[words.length - 1]
    
    document.querySelector('#result').innerHTML = lastCharacter
}

function clearFields(){
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}