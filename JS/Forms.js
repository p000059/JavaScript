let arrayForm = new Array();

function formSave(){
    
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let sex = document.getElementById('sex').value;
    let course = new Array();
    course.push(document.getElementById('textCheck').value);
    
    let objPerson = new Object();

    objPerson.name = name;
    objPerson.description = description;
    objPerson.sex = sex;
    objPerson.course = course;
    console.log(objPerson.name, objPerson.description, objPerson.sex, objPerson.course);

    arrayForm.push(objPerson);
}

function formRead(){
    
    document.getElementById('DataInformation').innerHTML = "Lista de Dados";
    document.getElementById('tName').innerHTML = arrayForm;
    document.getElementById('tDescription').innerHTML = arrayForm.description;
    document.getElementById('tSex').innerHTML = arrayForm.sex;
}