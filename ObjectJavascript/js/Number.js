var arrayData = new Array()

var create = document.getElementById('create')
create.addEventListener('click', () => register())

function register() {
    let valuesObject = insertValues()
    arrayData.push(valuesObject)
}

function insertValues() {
    let variableOne = document.getElementById('variableOne').value
    let objData = new Object()

    objData.variableOne = variableOne

    return objData
}

var read = document.getElementById('read')
read.addEventListener('click', () => { clearTable(), showTable() })

function showTable() {
    let id_table = document.getElementById('id_table')
    let table = document.createElement('table')

    table.className = 'table table-bordered table-striped table-hover'
    table.appendChild(createThead())
    table.appendChild(createTbody())
    id_table.appendChild(table)
}

function createThead() {
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let key = Object.keys(arrayData[0])

    for (let i in key) {
        let th = document.createElement('th')
        th.className = 'text-thead'
        th.className = 'table-primary'
        th.innerHTML = key[i]
        tr.appendChild(th)
    }

    thead.appendChild(tr)
    return thead
}

function createTbody() {
    let tbody = document.createElement('tbody')

    arrayData.forEach(show)

    function show(object) {
        let tr = document.createElement('tr')

        for (i in object) {
            let td = document.createElement('td')
            td.innerHTML = object[i]
            tr.appendChild(td)
        }

        tbody.appendChild(tr)
    }

    return tbody
}

let clear_table = document.getElementById('clear-table')
clear_table.addEventListener('click', () => clearTable())

function clearTable() {
    id_table.innerHTML = ''
}

var clear = document.getElementById('clear')
clear.addEventListener('click', () => clearFields())

function clearFields() {
    document.getElementById('variableOne').value = ''
}

var buttons = document.querySelectorAll('.button')
buttons.addEventListener('click', addButton)

function delButton() {
    console.log('button-del')
}

function addButton() {


    let divCol = document.getElementById('variables')
    let divGroup = document.createElement('div')

    let span = document.createElement('span')
    span.className = 'input-group-text'
    span.innerHTML = 'Insert Number'

    let input = document.createElement('input')
    input.className = 'form-control'

    let buttonadd = document.createElement('button')
    buttonadd.className = 'btn btn-neutral button-add'
    buttonadd.innerHTML = '+'
    buttonadd.addEventListener('click', () => addButton())

    function createIdAddButton() {
        console.log(button.id)
    }

    let button_del = document.createElement('button')
    button_del.className = 'btn btn-neutral button-add'
    button_del.innerHTML = ' - '
    button_del.addEventListener('click', () => delButton())

    let divButtons = document.createElement('div')
    divButtons.appendChild(buttonadd)
    divButtons.appendChild(button_del)

    divGroup.className = 'input-group bt-3 mt-3'
    divGroup.appendChild(span)
    divGroup.appendChild(input)
    divGroup.appendChild(divButtons)
    divCol.appendChild(divGroup)
}
