let id_label = 'string-simple'
document.querySelector('#string-simple').innerHTML = 'Hello, World!'

let btnEditString = document.querySelector('#btn-edit-string')
btnEditString.addEventListener('click', () => {
    let stringSimple = document.querySelector('#string-simple')
    let inputString = document.createElement('input')
    inputString.type = 'text'
    inputString.id = 'textInput'
    inputString.value = stringSimple.textContent
    stringSimple.parentNode.replaceChild(inputString, stringSimple)
});

let confirmEdit = document.querySelector('#confirm-edit');

confirmEdit.addEventListener('click', () => {
    let newString = document.querySelector('#textInput')
    console.log(newString.value)
    let inputString = document.createElement('label')
    inputString.id = id_label
    inputString.className = 'labels'
    inputString.innerHTML = newString.value
    newString.parentNode.replaceChild(inputString, newString) 
})

/* class Person {
    constructor(namePerson, emailPerson) {
        this.namePerson = namePerson;
        this.emailPerson = emailPerson;
    }    
}    

(function(){
    createPerson()
    createTable()
    console.log(createPerson().namePerson)
})()    

function createPerson(){
    let objPerson = new Person('Marcelo','marcelo.acad@gmail.com')
    return objPerson
}    

function createTable(){
    let idTable = document.querySelector('#idTable')
    let table = document.createElement('table')
    
    
    table.className = 'tables'
    table.appendChild(createThead())
    table.appendChild(createTbody())
    idTable.appendChild(table)
}    

function createThead(){
    let objData = createPerson()
    let key = Object.keys(objData[0])
    let thead = document.createElement('thead')
    let tr = document.createElement(tr)
    
    for(let i in key){
        let th = document.createElement('th')
        th.innerHTML = key[i]
        tr.appendChild(th)
    }    
    
    thead.appendChild(tr)
    return thead
}    

function createTbody(){
    let objData = createPerson()
    let tbody = document.createElement('tbody')
    let tr = document.createElement('tr')
    
    objData.forEach(callShowTbody);
    
    function callShowTbody(objData){
        let td = document.createElement('td')
        td.innerHTML = objData[i]
        tr.appendChild(td)
    }    

    tbody.appendChild(tr)
    return tbody
} */

