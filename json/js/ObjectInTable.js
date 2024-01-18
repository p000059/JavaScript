function loadJSON() {
    let objJSON = '[{"name":"Marcelo Guima", "email": "marcelo.acad@gmail.com"},{"name":"Juliana Mello", "email": "julianachaves09@gmail.com"},{"name":"Mauricio Guima", "email": "mauricio.guima@gmail.com"},{"name":"Ruth Guima", "email": "ruth.guima@gmail.com"}]'
    return JSON.parse(objJSON);
}

let createTableTwo = document.querySelector('#create-table')
createTableTwo.addEventListener('click', () => showTable())

let clearTable = document.querySelector('#clear-table')
clearTable.addEventListener('click', () => clearTableFunc())

function showTable() {
    clearTableFunc()
    let obj = loadJSON()
    let div = document.querySelector('#show-table')
    let table = document.createElement('table')

    table.className = 'tables'
    table.appendChild(createThead(obj))
    table.appendChild(createTbody(obj))
    div.appendChild(table)
}

function createThead(array) {
    let thead = document.createElement('thead')
    let key = Object.keys(array[0])
    let tr = document.createElement('tr')
    for (let i in key) {
        let th = document.createElement('th')
        th.innerHTML = key[i]
        tr.appendChild(th)
    }
    thead.appendChild(tr)
    return thead
}

function createTbody(array) {
    let tbody = document.createElement('tbody')
    array.forEach(showTbody)
    function showTbody(elements) {
        let tr = document.createElement('tr')
        for (let i in elements) {
            let td = document.createElement('td')
            td.innerHTML = elements[i]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    console.log(tbody)
    return tbody
}

function clearTableFunc() {
    document.querySelector('#show-table').innerHTML = ''
}