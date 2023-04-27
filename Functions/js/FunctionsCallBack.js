let vector = new Array()

function fn(callBack) {
    console.log(callBack)
    let x = callBack
    document.getElementById("ltext").innerHTML = x
}

function callBack(text) {
    return text
}

function callBackSum() {

}

function receiveNumber() {

    let number = document.getElementById('number').value
    vector.push(parseInt(number))

    console.log(vector)
}

function sum() {
    let result = 0
    for (let i = 0; i < vector.length; i++) {
        result += vector[i]
    }

    document.getElementById('ltotal').innerHTML = result
}
