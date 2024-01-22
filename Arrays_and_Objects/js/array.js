"use strict"

import { showTable, clearTable } from "../module/table.js"

const fruits = ["Banana","Laranja","Maçã","Manga","Limão","Pêra","Uva","Melancia","Goiaba","Maracujá"]

document.addEventListener('DOMContentLoaded', function(){

    const showArray = document.querySelector('#show-array')
    const clearField = document.querySelector('#clear-fields')
    const save = document.querySelector('#save')
    
    save.addEventListener('click', saveString)
    showArray.addEventListener('click', showArrayF)    
    clearField.addEventListener('click', clearFields)    
})

function showArrayF(){
    
   document.querySelector('#result').innerHTML = fruits

}

function saveString(event) {
    
    event.stopPropagation()
    event.preventDefault()
    
    let stringName = document.querySelector('#array-add').value
    fruits.push(stringName)
}

function clearFields(){
    
    document.querySelector('#array-add').value = ''
    document.querySelector('#result').innerHTML = ''    
}

