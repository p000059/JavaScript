var power = function(base, exponent){
    
    var result = 1;
    
    for(let count = 0; count < exponent; count++){
        result = result * base;
    }
    
    return result;
}

//Essa função anônima retorna um resultado para a variável makeNoise.
var makeNoise = function(){
    var msg = "Pling!";
    return msg;
}

//Essa função anônima recebe um parâmetro e retorna um resultado de acordo com a condição estabelecida no if.
var retornaResultado = function(n){
	if(n % 2 === 0){
		return "par";
	}
	else{
		return "impar";
	}
}

//Essa função utiliza de parâmetros opcionais 
var retornaResultado = function(x = 2, y = 3){
    if(x !== y){
        return x + y;
    }
    else if(x === y){
        return x - y;
    }
}

function fatorial(n){
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c;
    }
    return fat;
}

function countWhile(n){

    
}
