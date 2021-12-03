//A função abaixo vai atribuir a cada id do HTML uma operação em referência ao Array.

function showElements(){
    
    let corBandeira = ["Vermelha", "Amarela", "Preta", "Branca", "Quadriculada"];

    document.getElementById("array").innerHTML = "Array[0] = " + corBandeira[0]; //Mostra índice na posição 0
    document.getElementById("size").innerHTML = "Array.length = " + corBandeira.length; //Mostra tamanho da bandeira
    document.getElementById("lastPosition").innerHTML = "Array[length - 1] = " + corBandeira[corBandeira.length - 1]; //Mostra a última posição do Array
    document.getElementById("total").innerHTML = "Array[" + corBandeira + "]"; //Mostra todo o contéudo do Array.
}


