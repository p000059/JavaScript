import { showTable, clearTable } from '/JavaScript/Module/js/Publics/table.js'

let dataJavascript = '[{ "name": "Juliana", "email": "julianachaves09@outlook.com" }, { "name": "Marcelo", "email": "marcelo.acad@gmail.com" }, { "name": "Junior", "email": "junior.acad@gmail.com" }]'

function fileJSToJSON() {
    let javaScriptToJSON = JSON.parse(dataJavascript);
    return javaScriptToJSON;
}

const btnTable = document.querySelector('#show-table')
btnTable.addEventListener('click', () => showTable(fileJSToJSON(), '#id-table'))

const btnClear = document.querySelector('#clear-table')
btnClear.addEventListener('click', () => clearTable('#id-table'))