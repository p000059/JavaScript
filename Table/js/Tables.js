import { showTable, clearTable } from '../js/public/table.js'

let json = ''

fetch('json/Data01.json')
    .then(response => response.json())
    .then(data => json = data)
    .catch(error => console.log(error))

const readTable = document.querySelector('#read-table')
readTable.addEventListener('click', () => showTable(json, '#id-table'))

const btnClear = document.querySelector('#clear-table')
btnClear.addEventListener('click', () => clearTable('#id-table'))

