/* Mask for input and output */

let lstObj = new Array();
let objMask = new Object();

//Mask input
function masks(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execMasks()",1)
}

function execMasks(){
    v_obj.value=v_fun(v_obj.value)
}

function maskFoneInput(fone){
    
    fone = fone.replace(/\D/g,""); //Remove tudo o que não é dígito
    fone = fone.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    fone = fone.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return fone;
}

function mCPF(cpf){

    cpf = cpf.replace(/\D/g,"");
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4");
    return cpf;
}

function id( el ){
	return document.getElementById( el );
}

function idCPF(cpf){
    return document.getElementById(cpf);
}

window.onload = function(){
	
    id('fone').onkeyup = function(){
		masks( this, maskFoneInput );
	}
    
    id('cpf').onkeyup = function(){
        masks(this, mCPF);
    }
}

//Mask for output
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

function maskFoneInput(fone) {

    parseInt(fone)

    if (fone.length === 11) {

        fone = fone.replace(/D/g, ""); //Remove tudo o que não é dígito
        fone = fone.replace(/(\d{2})?(\d{5})?(\d{4})/, "($1)$2-$3");

    } else if (fone.length !== 10) {

        fone = fone.replace(/D/g, ""); //Remove tudo o que não é dígito
        fone = fone.replace(/(\d{2})?(\d{4})?(\d{4})/, "($1)$2-$3");
    }

    return fone;
}

function maskCPFinput(cpf) {

    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");

    return cpf;
}