import { showTable } from "/JavaScript/Module/js/Publics/table.js"
/* 
    XMLHttpRequest
    1 - Instantiate Object
    2 - Open Connection with URL open()
    3 - Method send()
    4 - Listener onreadystagechange
 */
/*
    0 - connection not started
    1 - configured request
    2 - request sent
    3 - processing
    4 - response received (success or fail)
 */
/* 
    GET - get data from server
    POST - send data to server
    PUT - update data to server
    DELETE - delete data to server
 */

const xhr = new XMLHttpRequest()
let json = ''

xhr.open('GET', '/JavaScript/Module/js/json/Data01.json')
xhr.send(null)

xhr.onreadystatechange = verifyAjax

function verifyAjax() {

    let idTable = document.getElementById('id-table')

    if (xhr.readyState === 4) {
        if(xhr.status === 200 || xhr.status === 304){
            json = JSON.parse(xhr.responseText)
            let ttable = showTable(json, '#id-table')
            idTable.cloneNode(ttable)
        }
    }
    
}



/* document.querySelector('#id-table').innerHTML = showTable(json) */

/* function createXMLHttpRequest(method, url, cb, data = null) {

    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(null)
    xhr.onreadystatechange = verifyAjax

    function verifyAjax() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 302) {
                const json = JSON.parse(xhr.responseText)
                if (typeof cb === "function") {
                    cb(json)
                }
            } else if (typeof cb === "function") {
                cb({
                    status: xhr.status,
                    message: "Error connection",
                    obj: xhr
                })
            }
        }
    }
}

export { createXMLHttpRequest } */

/* function getObjectMenu(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "js/json/string.json");
    let jsonData = ''
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        jsonData = JSON.parse(this.responseText);
        console.log(jsonData)
      }
    };
    return jsonData
} */

