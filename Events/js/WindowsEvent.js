window.onload = function () {
    console.log('DOM reading')
}

let btn = document.querySelector('#buttons')
btn.addEventListener('click', () => {
    showBtn(), function () {
        console.log(this)
    }
})

function showBtn() {
    let text = 'Button Event Javascript'
    document.querySelector('#result').innerHTML = text

}



var subtitle = document.querySelector('#titleW')

subtitle.addEventListener('dblclick', () => { showBtn() })

var idLabel = document.getElementById('idlabel')
idLabel.addEventListener('mouseover', function () {
    this.style.background = 'yellow'
})

idLabel.addEventListener('mouseout', function () {
    this.style.background = 'white'
})

subtitle.addEventListener('mouseover', function () {
    var legend = document.getElementById('legend')
    legend.classList.remove('hide')
})

//keydown
document.addEventListener('keydown', function (event) {
    console.log('Enter')
})

//keyup
document.addEventListener('keyup', function () {
    console.log('Exit Enter')
})

//keyPress
document.addEventListener('keypress', function (event) {
    console.log('key press')
}) 

let buttons1 = document.getElementById('buttons1')
buttons1.ondblclick = showText 
function showText(){
    document.getElementById('result1').innerHTML = 'Onclick Event'
}