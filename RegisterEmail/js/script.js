"use strict"

document.addEventListener('DOMContentLoaded', function(){

    let send = document.querySelector('#send')
    let clear = document.querySelector('#clear')

    send.addEventListener('click', registerEmail)
    clear.addEventListener('click', clearFields)
})

function registerEmail() {
    const txtEmail = document.querySelector('#word')
    const msgFeedback = document.querySelector('#result')
    
    msgFeedback.innerHTML = txtEmail.value
}

function clearFields(){
    document.querySelector('#word').value = ''
    document.querySelector('#result').innerHTML = ''
}