lsUsuario = [];
function gravarUsuario() {

    id = document.getElementById("id").value;
    nome = document.getElementById("name").value;
    email = document.getElementById("email").value;
    url = `name=${nome}&email=${email}`;

    if (nome.trim() == '') {
        alert('Erro no preenchimendo do nome.');
        return;
    }

    if (email.trim() == '') {
        alert('Erro no preenchimendo do email.');
        return;
    }

    const xhttp = new XMLHttpRequest();
    if (id == '') {
        xhttp.open("POST", "http://dbsys.herokuapp.com/home/create?" + url);
    } else {
        xhttp.open("PUT", `http://dbsys.herokuapp.com/home/update/${id}?${url}`);
    }
    xhttp.send();
    xhttp.onload = function () {
        msg = this.responseText;
        alert(msg);
        atualizarTabela();
        if (msg.substring(0, 2) == 'Ok') {
            limparCampos();
        }

    }
}

function limparCampos() {
    document.getElementById("id").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}

function atualizarTabela() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://dbsys.herokuapp.com/home/readAll");
    xhttp.send();
    xhttp.onload = function () {
        lsUsuario = JSON.parse(this.responseText);
        carregarPagina(0);
    }
}

function carregarPagina(pg) {
    qtPagina = lsUsuario.length / 5;
    if (qtPagina % 5 > 0) {
        qtPagina++;
    }
    qtPagina = parseInt(qtPagina);
    if (qtPagina > 1) {
        txtPaginas = `<li class="page-item " onclick='carregarPagina(0)'><a class="page-link" href="#">Início</a></li>`;
        for (i = 1; i <= qtPagina; i++) {
            txtPaginas += `<li class="page-item `; 
            if(i - 1 == pg){
                txtPaginas += "active";
            }
            txtPaginas += `" onclick='carregarPagina(${i - 1})' ><a class="page-link" href="#">${i}</a></li>`;
        }
        txtPaginas += `<li class="page-item" onclick='carregarPagina(${qtPagina - 1})'><a class="page-link" href="#">Fim</a></li>`;
        document.getElementById("lsPagina").innerHTML = txtPaginas;
    }

    texto = "";
    pg = 5 * pg;
    for (i = pg; i <= pg + 4; i++) {
        u = lsUsuario[i];
        if (u != undefined) {
            texto += `<tr onclick='carregarUsuario(${i})'><td>${u.id}</td><td>${u.nome}</td><td>${u.email}</td></tr>`;
        }
    }
    document.getElementById("tbCorpo").innerHTML = texto;
}

function carregarUsuario(i) {
    // console.log(lsUsuario[i]);
    u = lsUsuario[i];
    document.getElementById("id").value = u.id;
    document.getElementById("nome").value = u.nome;
    document.getElementById("email").value = u.email;
}

function apagarUsuario() {
    id = document.getElementById("id").value;
    if (id == '') {
        alert("Necessário selecionar algum registro!");
        return;
    }
    if (!confirm("Realmente deseja apagar esse registro?")) {
        return;
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "http://dbsys.herokuapp.com/home/deleteUser/" + id);
    xhttp.send();
    xhttp.onload = function () {
        alert(this.responseText);
        atualizarTabela();
        limparCampos();
    }
}
