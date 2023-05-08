
function ArrowFunctionOne() {

    const x = () => "Arrow Function One"
    const y = x
    document.getElementById('textOne').value = y
}

function ArrowFunctionTwo(textTwo){
    const k = textTwo
    const y = (a) => `Parameter -> ${a}` 
    const z = y(k)
    document.getElementById('ltextTwo').innerHTML = z
}
