"use strict"

const inputName = document.querySelector('#name')

inputName.addEventListener('focus', (event) => {
    let msg = 'Enter input!'
    console.log(msg)
    document.querySelector('#result-focus').innerHTML = msg
})

inputName.addEventListener('blur', (event) => {
    let msg = 'Exit input!'
    console.log(msg)
    document.querySelector('#result-blur').innerHTML = msg
})
