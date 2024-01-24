"use strict"

const eventDefault = document.querySelector('a')

eventDefault.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Não alterou a página.')
})