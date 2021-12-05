function loadJSON(){

    let xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        
        var objJSON = xhttp.responseText;
    }
    
    xhttp.open("GET", "https://dbsys.herokuapp.com/home/readAll");
    xhttp.send();
    
    let objJSON = '[{"name":"Marcelo Guima", "email": "marcelo.acad@gmail.com"},{"name":"Juliana Mello", "email": "julianachaves09@gmail.com"},{"name":"Mauricio Guima", "email": "mauricio.guima@gmail.com"},{"name":"Ruth Guima", "email": "ruth.guima@gmail.com"}]';
    
    let obj = JSON.parse(objJSON);
    
    return obj;

}

function showObject(){
    let obj = loadJSON();

    let idTable = document.getElementById('idTable');
    let table = document.createElement('table');
    

    for(let i in obj){ //For para o número de linhas

        let tr = document.createElement('tr'); //Cria a linha na tabela a cada interação do primeiro for.
        
        //for(let j in obj[i]){ //For para o número de colunas
            let td = document.createElement('td'); //Vai criar uma coluna na tabela a cada interação do segundo for.
            td.innerHTML = Object.keys(i);
            tr.appendChild(td); //Esse comando vai adicionar a coluna com o valor de atributo do objeto td ao atriuto tr do laço esterno.
        //}

        table.appendChild(tr); //Adiciona o objeto tr ao atributo table.
    }
    
    table.className = "table table-bordered table-hover table-striped"; //Define pelo atributo da classe table o estilo da tabela.
    idTable.appendChild(table); //Atribui o objeto table ao objeto idTable.
}

function createTbody(obj){
    
    let tbody = document.createElement('tbody');
    
    obj.forEach(increment); 
    
    function increment(element){
        
        let tr = document.createElement('tr');
        
        for(let i in element){
            
            let td = document.createElement('td');
            td.innerHTML = element[i];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);     
    }

    return tbody;
}


s