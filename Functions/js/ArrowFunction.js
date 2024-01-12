
document.addEventListener('DOMContentLoaded', function(){

    let showArrowOne = document.querySelector('#show-arrow-one')
    let showArrowTwo = document.querySelector('#show-arrow-two')

    showArrowOne.addEventListener('click', ArrowFunctionOne)
    showArrowTwo.addEventListener('click', ArrowFunctionTwo)
})

function ArrowFunctionOne() {

    const x = () => "Arrow Function One: "
    const y = document.querySelector('#text-one').value
    document.querySelector('#result').innerHTML = `${x} ${y}`
}

function ArrowFunctionTwo(){
    const k = document.querySelector('#text-two').value
    const y = (a) => `Parameter -> ${a}` 
    const z = y(k)
    document.querySelector('#result').innerHTML = z
}
