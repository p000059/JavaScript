function fn(callBack){
    console.log(callBack)
    const x = callBack
    document.getElementById("ltext").innerHTML = x
}

function callBack(text){
    return text
}

fn(callBack("Call Back Function"))
