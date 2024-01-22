const btnOne = document.getElementById('btnOne')
const btnTwo = document.getElementById('btnTwo')
const btnThree = document.getElementById('btnThree')

const container2 = document.querySelector('.container2')
const btns = document.querySelectorAll('.container2 button')

function showString() {
    let result = document.getElementById('textOne').innerHTML = 109
    return result
}

function showNumber() {
    document.getElementById('textOne').innerHTML = 45
}

btnOne.addEventListener('click', showString == String ? showString : showNumber)
btnOne.addEventListener('click', showString)

btnTwo.addEventListener('click', function (e) {
    console.log(e)
    e.stopPropagation()

}, false)

console.log([...btns])

container2.addEventListener('click', function(e){
    e.stopPropagation()

    if(e.target.nodeName === 'BUTTON'){
        console.log(e.target)
    }

})
