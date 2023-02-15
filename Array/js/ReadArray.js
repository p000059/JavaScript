function loadDoc() {
    const xhttp = new XMLHttpRequest()
    let arrayData = ''
    let stringJSON = ''
    xhttp.onload = function () {
        if(this.readyState == 4 && this.status ==200){
            stringJSON = xhttp.responseText
            arrayData = JSON.parse(stringJSON)
            showJSON(arrayData)
        }
    }
    xhttp.open("GET", "json/Content.json", true)
    xhttp.send()
}

const id_show = document.getElementById('id-show')
id_show.addEventListener('click', () => showJSON())

function showJSON(object){
    document.getElementById("id_table").innerHTML = object.status
}

/* const show = document.getElementById('id-show')
show.addEventListener('click', () => {
    clearTable(),
        showTable()
})
 

function clearTable() {
    let id_table = document.getElementById('id_table')
    id_table.innerHTML = ''
    return id_table
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
    
    for (let i in registerArray()) {
        let th = document.createElement('th')
        th.innerHTML = i.toUpperCase()
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
*/