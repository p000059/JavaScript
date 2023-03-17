(function(){
    showObject()
})()

function loadJSON() {
    let objJSON = '[{"name":"Marcelo Guima", "email": "marcelo.acad@gmail.com"},{"name":"Juliana Mello", "email": "julianachaves09@gmail.com"},{"name":"Mauricio Guima", "email": "mauricio.guima@gmail.com"},{"name":"Ruth Guima", "email": "ruth.guima@gmail.com"}]'
    let obj = JSON.parse(objJSON)
    
    return obj;
}

function showObject() {
    let obj = loadJSON()

    let idTable = document.querySelector('#idTable')
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    let key = Object.keys(obj[0])

    function showThead(){
        let tr = document.createElement('tr')
        for(let i in key){
            let th = document.createElement('th')
            th.innerHTML = key[i]
            tr.appendChild(th)
        }
        thead.className = 'thead-tables'
        thead.appendChild(tr)
    }

    showThead()

    obj.forEach(showTbody)

    function showTbody(obj){
        let tr = document.createElement('tr')
        for (let i in obj) { 
            let td = document.createElement('td')
            td.innerHTML = obj[i]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }

    table.className = "tables"
    table.appendChild(thead)
    table.appendChild(tbody)
    idTable.appendChild(table)
}

function createTbody(obj) {

    let tbody = document.createElement('tbody');

    obj.forEach(increment);

    function increment(element) {

        let tr = document.createElement('tr');

        for (let i in element) {

            let td = document.createElement('td');
            td.innerHTML = element[i];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    return tbody;
}