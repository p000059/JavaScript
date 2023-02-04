(function () {
    let dateYear = new Date()
    let year = dateYear.getFullYear()
    document.getElementById('footerYear').innerHTML = year
})()

const btnOne = document.getElementById('btnOne')
const btnTwo = document.getElementById('btnTwo')
const btnThree = document.getElementById('btnThree')


function showString(){
    document.getElementById('textOne').innerHTML = 109
}

function showNumber(){
    document.getElementById('textOne').innerHTML = 10
}

btnOne.addEventListener('click', showString == String ? showString : showNumber)
btnOne.addEventListener('click', showString)