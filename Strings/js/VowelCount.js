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
    
    document.querySelector('#count').innerHTML = ''
    document.querySelector('#result').innerHTML = ''
    
    let words = document.querySelector('#words').value
    let result = new Array()
    let count = 0
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    for (let i = 0; i < words.length; i++) {
        
        if (vowel.includes(words[i])){
            
            console.log(words[i])
            result.push(words[i])
            
            count++
        }
    }

    document.querySelector('#result').innerHTML = result
    document.querySelector('#count').innerHTML = `Total: ${count}`
}

function clearFields(){
    document.querySelector('#words').value = ''
    document.querySelector('#count').innerHTML = ''
    document.querySelector('#result').innerHTML = ''
}
