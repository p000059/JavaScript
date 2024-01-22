"use strict"

document.addEventListener('DOMContentLoaded', function(){

    let save = document.querySelector('#save')
    let clearFields = document.querySelector('#clear')

    save.addEventListener('click', Person.save)
})

class Person{

    constructor(){
        this.id = 0;
        this.arrayPerson = [];
        this.editID = null;
    }
    
    listTable(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayPerson.length; i++){
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_name = tr.insertCell();
            let td_email = tr.insertCell();
            let td_acoes = tr.insertCell();
            
            td_id.innerText = this.arrayPerson[i].id;
            td_name.innerText = this.arrayPerson[i].namePerson;
            td_email.innerText = this.arrayPerson[i].email;
            
            td_id.classList.add('center');
            td_acoes.classList.add('center');
            
            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            imgEdit.setAttribute("onclick","person.readyUpdate("+JSON.stringify(this.arrayPerson[i])+")");
            
            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick","person.delete("+ this.arrayPerson[i].id + ")");
            
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    save(){
        let objPerson = this.readData();
        
        if(this.validateFields(objPerson)){
            if(this.editID == null){
                this.addPerson(objPerson);
            }
            else{
                this.update(this.editID, objPerson);
            }
        }
        
        this.listTable();
        this.cancel();
    }
    
    readData(){
        let person = {};
        
        person.id = this.id;
        person.namePerson = document.getElementById('name').value;
        person.email = document.getElementById('email').value;
        
        return person;
    }
    
    addPerson(objPerson){
        this.arrayPerson.push(objPerson);
        this.id++;
    }
    
    
    readyUpdate(dados){
        
        this.editID = dados.id;
        
        document.getElementById('name').value = dados.namePerson;
        document.getElementById('email').value = dados.email;
        
        document.getElementById('btn1').innerText = 'Update';
    }
    
    update(id, person){
        
        for(let i = 0; i < this.arrayPerson.length; i++){
            if(this.arrayPerson[i].id == id){
                this.arrayPerson[i].namePerson = person.namePerson;
                this.arrayPerson[i].email = person.email;
            }
        }
    }

    cancel(){
        
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';

        document.getElementById('btn1').innerText = 'Salvar';
        this.editID = null;
    }
    
    delete(id){
        
        if(confirm('Deseja realmente deletar a pessoa de ID: ' + id)){
            
            let tbody = document.getElementById('tbody');
        
            for(let i = 0; i < this.arrayPerson.length; i++){
                
                if(this.arrayPerson[i].id == id){
                    this.arrayPerson.splice(i,1);
                    tbody.deleteRow(i);
                }
            }
        }
    }        
    
    validateFields(objPerson){
        let msg = '';
        
        if(objPerson.namePerson == ''){
            msg += 'Informe o nome da pessoa. \n';
        }
        
        if(objPerson.email == ''){
            msg += 'Informe o email. \n';
        }
        
        if(msg != ''){
            alert(msg);
            return false;
        }
        
        return true;
    }
}

var person = new Person();

function listItens(items, pageActual, limitItems){
    let result = [];
    let totalPage = Math.ceil(items.length / limitItems);
    let count = (pageActual * limitItems) - limitItems;
    let delimiter = count + limitItems;

    if(pageActual <= totalPage){
        for(let i = count; i < delimiter; i++){
            if(items[i] != null){
                result.push(items[i]);
                count++;
            }
        }
    }


    return result;
}
