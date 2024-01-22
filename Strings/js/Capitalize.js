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
    
    document.querySelector('#words').innerHTML = ''
    
    let words = document.querySelector('#words').value

    let stringCapitalize = words[0].toUpperCase() + words.substring(1)
    
    document.querySelector('#result').innerHTML = stringCapitalize
    console.log(stringCapitalize)
}

function clearFields(){
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}

