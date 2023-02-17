const method = "GET"
const link = "json/Content.json"
const xhttp = new XMLHttpRequest()
xhttp.open(method, link, true)
xhttp.send()
var response = ''

const id_show = document.getElementById('id-show')
id_show.addEventListener('click', () => {clearTable(), showJSON()} )

function showJSON() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        response = JSON.parse(xhttp.responseText)
        showTable()
    }
}

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
    let key = Object.keys(response[0])
    
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

    response.forEach(show)

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
