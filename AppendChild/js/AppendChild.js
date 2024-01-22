"use strict"

let bodyFull = document.body

let header = document.createElement('header')
header.className = 'header-style'

let p = document.createElement('p')
p.innerHTML = 'Cria Página com AppendChild'

header.appendChild(p)

let nav = document.createElement('nav')
let ul = document.createElement('ul')
let li = document.createElement('li')
let a = document.createElement('a')

a.href = 'AppendChild.html'
a.innerHTML = 'Append Child'

li.appendChild(a)
ul.appendChild(li)
nav.appendChild(ul)

let sectionOne = document.createElement('section')

var div = document.createElement('div')

var div2 = document.createElement('div')
div2.id = 'result'

var input = document.createElement('input')
input.className = 'input'
input.id = 'numberOne'
input.placeholder = 'Digite um número:'
input.type = 'number'

var button = document.createElement('button')
var text = document.createTextNode('capture')
button.className = 'button'
button.type = 'submit'
button.appendChild(text)
button.id = 'showNumber'
button.addEventListener('click', showNumber)


function showNumber(){
    let numberOne = parseInt(document.querySelector('#numberOne').value)
    console.log(numberOne, typeof(numberOne))
    document.querySelector('#result').innerHTML = numberOne
}

div.appendChild(input)
div.appendChild(button)

let sectionTwo = document.createElement('section')

sectionTwo.appendChild(div2)

sectionOne.appendChild(div)

bodyFull.appendChild(header)
bodyFull.appendChild(nav)
bodyFull.appendChild(sectionOne)
bodyFull.appendChild(sectionTwo)

