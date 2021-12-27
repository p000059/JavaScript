/* 
    Os arrays são por definição um objeto com conjuntos de valores ordenados que tem, um nome e uma referência de índice, exemplo: array[0,1,2,3,n...]
    Abaixo, são declarados 3 tipos de objeto:
    1 - Objeto JavaScript
    2 - Array de Objeto JavaScript
    3 - Array de atributos de um objeto JavaScript
*/

function loadObject(){
    
    let person1 = {firstName:"John", lastName:"Doe", age:46};
    showPerson1(person1);

    let person2 = [{name: "Marcelo", email: "marcelo.acad@gmail.com"},{name: "Julina", email: "julianachaves09@gmail.com"}];
    showPerson2(person2);

    let person3 = ["John", "Doe", 46];
    showPerson3(person3);
    
}

function showPerson1(obj){
    
    let person1 = document.getElementById('person1');
    let table = document.createElement('table');
    let tr = document.createElement('tr');

    for(let i in obj){
        
        let td = document.createElement('td');
        td.innerHTML = obj[i];
        tr.appendChild(td);
    }

    table.className = "table table-striped table-bordered table-hover";
    table.appendChild(tr);
    person1.appendChild(table);
}

function showPerson2(obj){

    let person2 = document.getElementById('person2');
    let table = document.createElement('table');
    
    obj.forEach(showPerson2);
    
    function showPerson2(obj){
        
        let tr = document.createElement('tr');
        
        for(let i in obj){

            let td = document.createElement('td');
            td.innerHTML = obj[i];
            tr.appendChild(td);
        }

        table.className = "table table-striped table-bordered table-hover";
        table.appendChild(tr);
    }

    person2.appendChild(table);
}

function showPerson3(person3){

    document.getElementById('person3').innerHTML = person3;
}