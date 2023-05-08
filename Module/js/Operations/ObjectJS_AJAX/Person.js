class PersonOne {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

class Citzen extends PersonOne {

    constructor(name, age, rg, cpf) {

        super(name, age);
        this.rg = rg;
        this.cpf = cpf;
    }
}

function createPersonOne() {

    let name = document.getElementById('namePersonOne').value;
    let age = document.getElementById('agePersonOne').value;
    let rg = document.getElementById('rgPersonOne').value;
    let cpf = document.getElementById('cpfPersonOne').value;

    const objPersonOne = new Citzen(name, age, rg, cpf);

    return objPersonOne;
}

function readPersonOne() {

    let objPersonOne = createPersonOne();

    document.getElementById('personOneName').innerHTML = objPersonOne.name;
    document.getElementById('personOneIdade').innerHTML = objPersonOne.age;
    document.getElementById('personOneRG').innerHTML = objPersonOne.rg;
    document.getElementById('personOneCPF').innerHTML = objPersonOne.cpf;
}