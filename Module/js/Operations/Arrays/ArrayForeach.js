import { createLabel } from '/JavaScript/Module/js/Publics/labels.js'

const array = [2, 4, 6, 8, 10, 'two', 'four', 'six', 'eight', 'ten']
const rows = [['Carbs', '17g'], ['Protein', '19g'], ['Fat', '5g']]

const showTable = document.querySelector('#show-array')
showTable.addEventListener('click', () => showArray())

function showArray() {
    document.querySelector('#array').value = array
}

const filterNames = document.querySelector('#filter-names')
filterNames.addEventListener('click', () => filterName())

const filterNumbers = document.querySelector('#filter-numbers')
filterNumbers.addEventListener('click', ()=> filterNumber())

function filterName() {
    array.forEach(() => {
        createLabel(document.querySelector('#result').innerHTML = `${returnNames()}`)
    })
}

function filterNumber(){
    array.forEach(()=>{
        createLabel(document.querySelector('#result').innerHTML = `${returnNumbers()}`)
    })
}

function returnNames() {
    let arrayNames = array.filter((name) => typeof name === 'string')
    return arrayNames
}

function returnNumbers(){
    let arrayNumbers = array.filter((number) => typeof number === 'number')
    return arrayNumbers
}

const clearField = document.querySelector('#clear-fields')
clearField.addEventListener('click', function(event){
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#array').value = ''
})

const clearResult = document.querySelector('#clear-result')
clearResult.addEventListener('click', function(event){
    event.stopPropagation()
    event.preventDefault()
    document.querySelector('#result').innerHTML = ''
})