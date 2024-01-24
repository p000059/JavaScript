"use strict"

const addEvent = document.querySelector('#add-event') 
const removeEvent = document.querySelector('#remove-event')

addEvent.addEventListener('click', changeColorB)
removeEvent.addEventListener('click', removeEnventList) 


function changeColorB(e){
    
    let result = document.createElement('p')
    let div = document.querySelector('#result')
    
    result.textContent = 'Event Button Result'
    result.style.color = '#fff'
    result.style.textShadow = '2px 2px 3px #454747'
    result.style.fontSize = '35px'
    result.style.fontFamily = 'Marhey'
    result.style.textAlign = 'center'
    
    div.appendChild(result)
    
    console.log(result)
}

function removeEnventList(){
    
    console.log('Removido')
    addEvent.removeEventListener('click', changeColorB)
}

function changeColorA(e) {

    e.target.style.backgroundColor = 'rgb(175,254,123)'
    console.log(e)
}
