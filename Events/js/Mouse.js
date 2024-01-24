"use strict"

const mouse = document.querySelector('#mouse')

mouse.addEventListener('mousedown', () => {
    let msg = 'Pressed the mouse button.'
    console.log(msg)
    document.querySelector('#result-one').innerHTML = msg
})

mouse.addEventListener('mouseup', () => {
    let msg = 'Released the mouse button.'
    console.log(msg)
    document.querySelector('#result-two').innerHTML = msg
})

const doubleClick = document.querySelector('#mouse-double')

doubleClick.addEventListener('dblclick', (e) => {
    let msg = 'Double Click!'
    console.log(msg)
    document.querySelector('#double-click').innerHTML = msg
})

document.addEventListener('mousemove', (event) => {
    console.log(`X axis: ${event.x}`)
    console.log(`Y axis: ${event.y}`)

    document.querySelector('#mouse-move').innerHTML = `X axis: ${event.x} <br />Y axis: ${event.y}`
})

window.addEventListener('scroll', function(event){

    if(this.window.pageYOffset > 200){
        console.log("200px Max")
    }
})