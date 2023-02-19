let arrayData = new Array();

const id_register = document.getElementById('id-register')
id_register.addEventListener('click', () => registerArray())

function registerArray() {
    valuesObject = insertValues()
    arrayData.push(valuesObject)

    return arrayData
}

function insertValues() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('pwd').value
    let objData = new Object();

    objData.name = name
    objData.email = email
    objData.password = password

    return objData
}

const id_show = document.getElementById('id-show')
id_show.addEventListener('click', () => { clearTable(), showTable() })

function showTable() {
    let id_table = document.getElementById('id_table')
    let table = document.createElement('table')

    table.className = 'table'
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
        th.className = 'text-table'
        th.innerHTML = key[i]
        tr.appendChild(th)
    }

    thead.appendChild(tr)
    return thead
}

function createTbody() {
    let tbody = document.createElement('tbody');

    arrayData.forEach(show)

    function show(object) {
        let tr = document.createElement('tr');

        for (i in object) {
            let td = document.createElement('td');
            td.innerHTML = object[i];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    return tbody
}

function clearTable() {
    let id_table = document.getElementById('id_table')
    id_table.innerHTML = ''
    return id_table
}