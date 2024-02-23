document.addEventListener('DOMContentLoaded', (e) => {

    e.preventDefault()

    let addNumber = document.querySelector('#add-number')
    
    addNumber.addEventListener('click', addNumberFunc)
    
})

function addNumberFunc(e) {
    
    e.preventDefault()

    let numberForm = Number.parseFloat(document.querySelector('#number-form').value)
    let showNumberForm = showNumber(numberForm).innerHTML

    console.log(showNumber(numberForm))

    
    let editNumber = document.querySelector('#edit-number')
    console.log(editNumber)
    editNumber.addEventListener('click', editNumberFunc)


    document.querySelector('#result').innerHTML = showNumberForm
    document.querySelector('#number-form').value = ''
    
}

function editNumberFunc() {
    
    debugger
    let numberForm = document.querySelector('#number-result')
    console.log(numberForm)
}

function removeNumberFunc() {
    console.log('remove number')
}

function showNumber(number) {

    let result = document.querySelector('#result')
    let div = document.createElement('div')
    let removeNumber = document.createElement('button')
    let editNumber = document.createElement('button')

    div.className = 'result'
    div.id = 'number-result'
    div.innerText = number

    removeNumber.className = 'button'
    removeNumber.id = 'remove-number'
    removeNumber.innerText = 'remove number'

    editNumber.className = 'button'
    editNumber.id = 'edit-number'
    editNumber.innerText = 'edit number'

    result.appendChild(div)
    result.appendChild(editNumber)
    result.appendChild(removeNumber)


    return result

}


