var body = document.body
var header = document.createElement('header')
var main = document.createElement('main')
var footer = document.createElement('footer')
var small = document.createElement('small')
var span = document.createElement('span')

var div = document.createElement('div')
var div2 = document.createElement('div')
div2.id = 'result'

var label = document.createElement('label')
label.textContent = 'Enter a Number'
/* var text_label = document.createTextNode('Enter a Number:') */
label.className = 'inputs'
/* label.appendChild(text_label) */

var input = document.createElement('input')
input.className = 'inputs'
input.id = 'numberOne'
input.placeholder = 'Enter a number:'
input.type = 'number'

var button = document.createElement('button')
var text = document.createTextNode('capture')
button.className = 'buttons btn-success'
button.appendChild(text)
button.id = 'showNumber'

button.addEventListener('click', () => showNumber())

function showNumber(){
    let numberOne = parseInt(document.querySelector('#numberOne').value)
    console.log(numberOne, typeof(numberOne))
    document.querySelector('#result').innerHTML = numberOne
}

div.appendChild(label)
div.appendChild(input)
div.appendChild(button)

main.className = 'container'
main.appendChild(div)
main.appendChild(div2)

var theader = document.createTextNode('AppendChild')
header.appendChild(theader)

span.id = 'year'
var tspan = document.createTextNode('2022')
span.appendChild(tspan)

var tsmall = document.createTextNode('Guimba - ')
small.appendChild(tsmall)
small.appendChild(span)

footer.appendChild(small)

body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)
