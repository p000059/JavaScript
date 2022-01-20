let lstObj = new Array();
let objMask = new Object();

function maskCPF() {

    let cpf = document.getElementById('txtcpf').value;
    objMask.cpf = cpf;
    lstObj.push(objMask);

    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

    document.getElementById('cpf').innerHTML = cpf;

}

function maskCNPJ() {

    let cnpj = document.getElementById('txtcnpj').value;
    objMask.cnpj = cnpj;
    lstObj.push(objMask);

    cnpj = cnpj.replace(/\D/g, "");
    cnpj = cnpj.replace(/(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/, "$1.$2.$3/$4-$5");

    document.getElementById('cnpj').innerHTML = cnpj;

}

function maskFone() {

    let tel = document.getElementById('txtfone').value;
    objMask.tel = tel;
    lstObj.push(objMask);

    if (tel.length === 11) {

        tel = tel.replace(/\D/g, "")
        tel = tel.replace(/(\d{2})?(\d{5})?(\d{4})/, "($1)$2-$3")

        document.getElementById('fone').innerHTML = tel;

    } else if (tel.length === 10) {

        tel = tel.replace(/\D/g, "")
        tel = tel.replace(/(\d{2})?(\d{4})?(\d{4})/, "($1)$2-$3")

        document.getElementById('fone').innerHTML = tel;
    }
}

function maskCEP() {

    let cep = document.getElementById('txtcep').value;
    objMask.cep = cep;
    lstObj.push(objMask);

    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/(\d{2})?(\d{3})?(\d{3})/, "$1.$2-$3")

    document.getElementById('cep').innerHTML = cep;
}

function maskDate() {

    let date = document.getElementById('txtdate').value;
    objMask.date = date;
    lstObj.push(objMask);

    date = date.replace(/\D/g, "");
    date = date.replace(/(\d{2})?(\d{2})?(\d{4})/, "$1/$2/$3");

    document.getElementById('date').innerHTML = date;
}

function clearFields() {

    document.getElementById('txtcpf').value = "";
    document.getElementById('txtcnpj').value = "";
    document.getElementById('txtfone').value = "";
    document.getElementById('txtcep').value = "";
    document.getElementById('txtdate').value = "";
    document.getElementById('cpf').innerHTML = "";
    document.getElementById('cnpj').innerHTML = "";
    document.getElementById('fone').innerHTML = "";
    document.getElementById('cep').innerHTML = "";
    document.getElementById('date').innerHTML = "";

}

function showTable() {

    let table = document.getElementById('tableMask');
    let tbody = document.createElement('tbody');

    lstObj.forEach(increment);

    function increment(element) {

        let tr = document.createElement('tr');

        for (let i in element) {

            let td = document.createElement('td');
            td.innerHTML = element[i];
            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}