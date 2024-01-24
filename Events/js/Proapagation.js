"use strict"

const containerBtn = document.querySelector('#btn-container')
const insideBtn = document.querySelector('#div-btn')

containerBtn.addEventListener('click', () => {
    
    let msg = 'Element <section>, event 1(One)'
    console.log(msg)
    document.querySelector('#result').innerHTML = msg    
})

insideBtn.addEventListener('click', (event) => {

    event.stopPropagation()
    let msg = 'Element <div>, event 2(Two)'
    console.log(msg)
    document.querySelector('#result').innerHTML = msg
})