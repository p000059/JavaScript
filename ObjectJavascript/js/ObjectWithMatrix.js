(function(){
    
    let personOne = {firstName:"John", lastName:"Doe", age:46};
    showPersonOneValue(personOne);

    let person2 = [{name: "Marcelo", email: "marcelo.acad@gmail.com"},{name: "Juliana", email: "juliana.melo@gmail.com"}];
    showPerson2(person2);

    let person3 = ["John", "Doe", 46];
    showPerson3(person3);
    
})()

function showPersonOneValue(obj){
    let person1 = document.querySelector('#person1');
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    
    for(let i in obj){
        
        let td = document.createElement('td');
        td.innerHTML = obj[i];
        tr.appendChild(td);
    }

    table.className = "tables";
    table.appendChild(tr);
    person1.appendChild(table);
}

function showPersonOneIndexValue(object){
    let person = document.querySelector('#person-one-index-value')
    let table = document.createElement('table')

    
}

function showPerson2(obj){

    let person2 = document.querySelector('#person2')
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

    obj.forEach(showPerson2)
    
    function showPerson2(obj){
        
        let tr = document.createElement('tr')
        
        for(let i in obj){

            let td = document.createElement('td')
            td.innerHTML = obj[i]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    
    table.className = "tables"
    table.appendChild(thead)
    table.appendChild(tbody)
    person2.appendChild(table);
}

function showPerson3(person3){

    document.getElementById('person3').innerHTML = person3;
}