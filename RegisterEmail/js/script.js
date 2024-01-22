"use strict"

document.addEventListener('DOMContentLoaded', function(){

    let send = document.querySelector('#send')
    let clear = document.querySelector('#clear')

    send.addEventListener('click', registerEmail)
    clear.addEventListener('click', clearFields)
})

function registerEmail() {
    const txtEmail = document.getElementById('txtEmail')
    const msgFeedback = document.getElementById('newsletterFeedback')
    
    msgFeedback.innerHTML = txtEmail.value
}

function clearFields(){
    document.querySelector('#txtEmail').value = ''
    document.querySelector('#newsletterFeedback').innerHTML = ''
}