"use strict"

import { showTable, clearTable } from "../js/public/table.js";

document.addEventListener('DOMContentLoaded', function(){

    const readTable = document.querySelector('#read-table')
    readTable.addEventListener('click', () => showTable(data,'#id-table'))
    
    const btnTable = document.querySelector('#clear-table')
    btnTable.addEventListener('click', () => clearTable('#id-table'))
    
})

let data = ''

fetch('json/data.json')
    .then(response => response.json())
    .then(json => data = json)
    .catch(error => console.error(error))

