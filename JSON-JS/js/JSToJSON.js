let objJavaScript = [{name: "Juliana", email: "julianachaves09@outlook.com"},{name: "Marcelo", email: "marcelo.acad"}];

function fileJSToJSON(){

    let JSToJSON = JSON.stringify(objJavaScript);
    return JSToJSON;
}

function showJSON(){

    let table = document.querySelector('table');
    let tbody = document.createElement('tdody');
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = fileJSToJSON();

    tr.appendChild(td);
    tbody.appendChild(td);
    
    table.className = "table table-striped table-bordered table-hover";
    table.appendChild(tbody);
}