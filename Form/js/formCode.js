function gravarUsuario(){
    nome = document.getElementById("nome").value;
    document.getElementById("ver").innerHTML = `Nome: ${nome}`;


}

function limparCampos(){
    document.getElementById("nome").innerHTML = "";
    document.getElementById("email").innerHTML = "";
}

function accessAPi(){

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        arrayU = JSON.parse(this.responseText);
        for(u in arrayU){
            u = arrayU[i];
            console.log(u);
            texto += "<tr><td>`${u.id}`</td></tr>";
        }

    }
    xhttp.open("GET", "https://dbsys.herokuapp.com/home/readAll");
    xhttp.send();
}