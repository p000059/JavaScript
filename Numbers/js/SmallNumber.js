
let array = [15, 113, 300, 89, 47, 200, 2, 1, 12, 26]

document.addEventListener('DOMContentLoaded', function () {

    let execute = document.querySelector('#execute')
    let showArray = document.querySelector('#show-array')
    let clear = document.querySelector('#clear')

    showArray.addEventListener('click', showArrayInput)
    execute.addEventListener('click', showResult)
    clear.addEventListener('click', clearFields)
})

function showArrayInput() {

    document.querySelector('#array-input').value = array
}

function showResult(event) {

    event.preventDefault()
    event.stopPropagation()

    document.querySelector('#result').innerHTML = ''

    let resultNumber = array[0]
    let position = 0

    for (let i = 0; i < array.length; i++) {

        if (array[i] < resultNumber) {

            resultNumber = array[i]
            position = i
        }
    }

    document.querySelector('#result').innerHTML = `<br/>Array Position: ${position} <br/>Array Element: ${resultNumber}`
    return resultNumber
}

function clearFields() {
    document.querySelector('#array-input').value = ''
    document.querySelector('#result').innerHTML = ''
}

