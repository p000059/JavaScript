"user strict"

const header = document.querySelector('#header')

const pHeader = document.querySelector('#p-header')

const section = header.parentElement

console.log(section)

const h2 = document.createElement('h1')

h2.textContent = 'Replace Child'

header.replaceChild(h2, pHeader)