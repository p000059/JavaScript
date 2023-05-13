import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

const arr = [1, 5, 10, 20, 37, "hello",'friend', true, false, true, true]

document.querySelector('#array-input').value = `Array [ ${arr} ]`

let filterNumbers = document.querySelector('#filter-numbers')
filterNumbers.addEventListener('click', (event) => showNumbers(event))

let filterStrings = document.querySelector('#filter-strings')
filterStrings.addEventListener('click', (event) => showStrings(event))

let filterBoolean = document.querySelector('#filter-boolean')
filterBoolean.addEventListener('click', (event) => showBooleans(event))

function showStrings (event) {
    event.preventDefault()
    event.stopPropagation()
    const array = arr.filter((element, index, array) => {
        if(typeof element === 'string'){
            console.log(`Index: ${index} | Value: ${element} | Array: ${array[index]}`)
            return typeof element === 'string'
        } else {
            console.log(`Index: ${index} | Value: ${element} | Array: ${array[index]}`)
            return null
        }
    })
    createLabel(document.querySelector('#result').innerHTML = array)
    return array
}

function showNumbers(event) {
    event.preventDefault()
    event.stopPropagation()
    const array = arr.filter((element, index, array) => {
        console.log(`Index: ${index}  |  Value: ${element} | ${array[index]}`)
        return typeof element === 'number'
    })
    createLabel(document.querySelector('#result').innerHTML = array)
    return array
}

function showBooleans(event){
    event.preventDefault()
    event.stopPropagation()
    const array = arr.filter((element, index, array) => {
        console.log(`Index: ${index}  |  Value: ${element} | ${array[index]}`)
        return typeof element === 'boolean'
    })
    createLabel(document.querySelector('#result').innerHTML = array)
    return array
}
