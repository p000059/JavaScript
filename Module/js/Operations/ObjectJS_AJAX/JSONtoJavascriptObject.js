import { clearTable, showTable } from "/JavaScript/Module/js/Publics/table.js";
let JSONString = '[{"name": "Juliana", "email": "julianachaves09@outlook.com"}]';

function objJavaScript() {
    let JSON_to_array = JSON.parse(JSONString);
    return JSON_to_array;
}

const btnTable = document.querySelector('#show-table')
btnTable.addEventListener('click', () => showTable(objJavaScript(), '#id-table'))

const btnClear = document.querySelector('#clear-table')
btnClear.addEventListener('click', () => clearTable('#id-table'))