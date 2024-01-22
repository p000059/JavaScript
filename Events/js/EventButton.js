document.querySelector('button').addEventListener('click', changeColorB)
//document.querySelector('button').removeEventListener('click', changeColorB)

function changeColorA(e) {
    var rndCol = 'rgb(175,254,123)'
    e.target.style.backgroundColor = rndCol
    console.log(e)
}

function changeColorB(e){
    let text = 'color'
    document.querySelector('#result').innerHTML = text
    console.log(text)
}
