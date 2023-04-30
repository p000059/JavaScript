
let execute = document.querySelector('#execute')
execute.addEventListener('click', (event) => showResult(event))

let clear = document.querySelector('#clear')
clear.addEventListener('click', (event) => clearFields(event))

function createLabel(object) {
    let label = document.createElement('label')
    label.textContent = object
    return label
}

function showResult(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#result').innerHTML = ''
    let words = document.querySelector('#words').value
    let result = new Array()
    let count = 0
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    for (let i = 0; i < words.length; i++) {
        if (vowel.includes(words[i])){
            console.log(words[i])
            result.push(words[i])
            count++
        }
    }

    createLabel(document.querySelector('#result').innerHTML = result)
    createLabel(document.querySelector('#count').innerHTML = `Total: ${count}`)
}

function clearFields(event) {
    event.preventDefault()
    event.stopPropagation()
    document.querySelector('#words').value = ''
    document.querySelector('#result').innerHTML = ''
}