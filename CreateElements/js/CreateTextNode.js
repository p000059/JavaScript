"use strict"

let body = document.querySelector('#body-page')

const myText = document.createTextNode('Texto criado para o segundo elemento section')

const section = document.createElement('section')

const p = document.createElement('p')

p.appendChild(myText)
section.appendChild(p)

body.appendChild(section)

console.log(myText)
console.log(p)
console.log(section)