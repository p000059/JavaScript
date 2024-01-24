"use strict"

document.addEventListener('keyup', (event) => {

    console.log(`Released the key: ${event.key}`)
    document.querySelector('#result-keyup').innerHTML = `Released the key: ${event.key}`
})

document.addEventListener('keydown', (event) => {

    console.log(`Pressed the Button: ${event.key}`)
    document.querySelector('#result-keydown').innerHTML = `Pressed the Button: ${event.key}`
})