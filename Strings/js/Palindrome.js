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
    
    let words = document.querySelector('#words').value.toLowerCase()
    let inversion = words.split('').reverse().join('').toLowerCase()
    let test = (words === inversion) ? true : false

    document.querySelector('#result').innerHTML = `Word: ${words}; <br/>Invert: ${inversion}; <br/>Palindrome? ${test}`
}

function clearFields(){
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}
