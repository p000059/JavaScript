let array = ['Aula', 'Estudo', 'Curso', 'Diretriz', 'Operacao', 'Faculdade', 'Instituto', 'Propriedade']

document.addEventListener('DOMContentLoaded', function () {

    let addElement = document.querySelector('#add-element')
    let showArray = document.querySelector('#show-array')
    let clearField = document.querySelector('#clear-fields')


    addElement.addEventListener('click', addElementPush)
    showArray.addEventListener('click', showArrayPush)
    clearField.addEventListener('click', clearFields)
})

function addElementPush() {

    let propOne = document.querySelector('#property-one').value
    array.push(propOne)
}

function showArrayPush() {

    let divResult = document.querySelector('#result')
    let div = ''

    array.forEach(name => {

        div = document.createElement('div')
        div.innerHTML = name
        divResult.appendChild(div)
    })

    clearFields()
}

function clearFields() {

    document.querySelector('#property-one').value = ''
    document.querySelector('#result').innerHTML = ''
}

