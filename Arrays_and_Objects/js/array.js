"use strict"

const fruits = ["Banana", "Orange", "Apple", "Mango", "lemon"];

document.addEventListener('DOMContentLoaded', function(){

    const showArray = document.querySelector('#show-array')
    const clearField = document.querySelector('#clear-fields')
    const save = document.querySelector('#save')
    
    save.addEventListener('click', saveString)
    showArray.addEventListener('click', showArrayInput)    
    clearField.addEventListener('click', clearFields)    
})

function clearFields(){
    
    document.querySelector('#array-add').value = ''
    document.querySelector('#array').value = ''    
}

function showArrayInput(){
    
    document.querySelector('#array').value = fruits
}

function saveString(event) {
    
    event.stopPropagation()
    event.preventDefault()
    
    let stringName = document.querySelector('#array-add').value
    fruits.push(stringName)
}


