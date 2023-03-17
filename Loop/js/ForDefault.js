var multiplication = document.querySelector('#multiplication')
var division = document.querySelector('#division')
var sum = document.querySelector('#sum')
var subtraction = document.querySelector('#subtraction')

multiplication.addEventListener('click', () => showTable())

function showTable() {
    let idTable = document.querySelector('#idTable')
    let table = document.createElement('table')
    let thead = createThead()
    let tbody = createTbody()

    table.className = 'customers'
    table.appendChild(thead)
    table.appendChild(tbody)
    idTable.appendChild(table)
}

function createThead() {
    let thead = document.createElement('thead')
    let tr = document.createElement('tr')
    let td = document.createElement('td')

    tr.appendChild(td)
    thead.appendChild(tr)
    return tr
}

multiplication.addEventListener('click', () => createTbody())

function createTbody() {
    let tbody = document.createElement('tbody')
    let tr = ''
    let td = ''
    let td1 = ''
    let td2 = ''
    let number = parseInt(document.querySelector('#number').value)

    for (let i = 1; i < 11; i++) {
        tr = document.createElement('tr')
        for (let j = 1; j < i; j++) {
            td = document.createElement('td')
            td1 = document.createElement('td')
            td1.innerHTML = i
            td2.innerHTML = number
            td.innerHTML = i * number
        }
    }
    tr.appendChild(td1)
    
    tr.appendChild(td)

    tbody.appendChild(tr)
    return tbody
}
