function loadJSON(){

    let xhttp = new XMLHttpRequest();

    let objJSON = '[{"name":"Marcelo Guima", "email": "marcelo.acad@gmail.com"},{"name":"Juliana Mello", "email": "julianachaves09@gmail.com"},{"name":"Mauricio Guima", "email": "mauricio.guima@gmail.com"},{"name":"Ruth Guima", "email": "ruth.guima@gmail.com"}]';
    let objJavaScript = JSON.parse(objJSON);
    return objJavaScript;
}

function showObject(){
    let obj = loadJSON();

    document.getElementById('idTable').innerHTML = obj;
}

function createObject(){
    
}