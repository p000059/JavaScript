function gravarUsuario(){
    nome = document.getElementById("nome").value;
    document.getElementById("ver").innerHTML = `Nome: ${nome}`;

}

function limparCampos(){
    document.getElementById("nome").innerHTML = "";
    document.getElementById("email").innerHTML = "";
}

function loadAPI(){

    const objHTTP = new XMLHttpRequest();
    
    objHTTP.onload = function(){
        
        document.getElementById("api").innerHTML = this.responseText;
        
        arrayFile = JSON.parse(this.responseText);
        
        createGrid(arrayFile);
    }

    objHTTP.open("GET", "https://dbsys.herokuapp.com/home/readAll", true);
    objHTTP.send();
}

function createGrid(lstPerson){
    
    qtPage = lstPerson.length / 5;
    if(qtPage > 1){
        let txtPageStart = `<li class="page-item" onclick.loadPage(0)><a class="page-link" href="#">Previous</a></li>`;
        
        for(let i = 1; i <= 5; i++){
            let txtPageFinish = `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;    
        }

        let txtPageFinish = `<li class="page-item"><a class="page-link" href="#">Next</a></li>`;
        document.getElementById("lstList").innerHTML = txtPageStart;
    }

    let texto = "";

    for(i in lstPerson){
        let u = lstPerson[i];
        texto += `${u.id} ${u.name} ${u.email}`;
    }
    
    document.getElementById("api").innerHTML = texto;

}

function loadPage(){
    text = "";
    for(let i = 0; i < 4; i++){
        let u = lstPerson[i];
        texto += `${u.id} ${u.name} ${u.email}`;
    }
    document.getElementById("api").innerHTML = texto;
}

function validar(){

    XMLHttpRequest sc;
    sc.onload = function(){
        msgi = this.responseText;
        alert(msgi);
        if(msgi.substring(0,2))
    }
}
