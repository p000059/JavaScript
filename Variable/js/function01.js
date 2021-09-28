var power = function(base, exponent){
    
    var result = 1;
    
    for(let count = 0; count < exponent; count++){
        result = result * base;
    }
    
    return result;
}

var makeNoise = function(){
    var msg = "Pling!";
    return msg;
}
