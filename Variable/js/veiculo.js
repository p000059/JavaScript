var statusCarro = "deligado";
var aceleracao = 0;
var rotacaoVolante = 0;

function ligarDesligar(){
    if(statusCarro === "desligado"){
        statusCarro = "ligado";
    }
    else{
        statusCarro = "desligado";
    }
}

function acelerarCarro(incremento){
    aceleracao = aceleracao + incremento;

    return "Aceleração de " + aceleracao + "m/s²";
}

function desaceleracaoCarro(decremento){
    aceleracao = aceleracao + decremento;

    return "Desacelerando para " + aceleracao + "m/s²";
}

function girarVolante(anguloRotacao){
    rotacaoVolante = anguloRotacao;

    return "Volante a " + rotacaoVolante + "º";
}