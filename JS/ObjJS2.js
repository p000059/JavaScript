class Person {

    constructor(namePerson, agePerson, emailPerson) {
        this.namePerson = namePerson;
        this.agePerson = agePerson;
        this.emailPerson = emailPerson;
    }
}

class Square {

    constructor(base, heigth) {

        this._color = 'blue';
        this.base = base;
        this.heigth = heigth;


    }

    get color() { return this._color; }
    set color(color) { this._color = color; }

    areaCalc() {
        return this.base * this.heigth;
    }
};

function createSquare() {

    let base = document.getElementById('baseSquare').value;
    let heigth = document.getElementById('heigthSquare').value;
    let color = document.getElementById('colorSquare').value;
    let objSquare = new Square(base, heigth);
    objSquare.color = color;

    console.log(objSquare.color, objSquare.base, objSquare.heigth);
    return objSquare;
}

var optionList = [];

function createObject() {

    Person.namePerson = document.getElementById('namePerson').value;
    Person.agePerson = document.getElementById('agePerson').value;
    Person.emailPerson = document.getElementById('emailPerson').value;

}

function clearField() {

    document.getElementById('namePerson').value = "";
    document.getElementById('agePerson').value = "";
    document.getElementById('emailPerson').value = "";
}

function readObject() {

    let idTable = document.getElementById('idTable');
    let table = document.createElement('table');
    table.className = "table border table-striped";
    table.appendChild(createThead());
    table.appendChild(createTbody());
    idTable.appendChild(table);

}

function createThead() {

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    for (let i in Person) {

        let th = document.createElement('th');
        th.innerHTML = i;
        tr.appendChild(th);
    }

    thead.className = "table-success";
    thead.appendChild(tr);
    return thead;
}

function createTbody() {

    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');

    for (let i in Person) {

        let td = document.createElement('td');

        td.innerHTML = Person[i];
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
    return tbody;
}

function createTable() {


}

function createObject() {

    Person.namePerson = document.getElementById('namePerson').value;
    Person.agePerson = document.getElementById('agePerson').value;
    Person.emailPerson = document.getElementById('emailPerson').value;

}

function readClassSquare() {

    document.getElementById('resultSquare').innerHTML = this.createSquare().Square.areaCalc();
    document.getElementById('resultColor').innerHTML = this.createSquare().Square.color;

}