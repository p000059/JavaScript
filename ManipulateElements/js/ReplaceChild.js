"use strict"


/* Parent Element */
let header = document.querySelector('#header')

/* Child Element */
let pHeader = document.querySelector('#p-header')

const originalHeader = pHeader.innerHTML

console.log(originalHeader)

/* New Element */
let h4 = document.createElement('h4')



pHeader.addEventListener('mousemove', function () {
    
    /* Fill child element */
    h4.textContent = 'Replace Child'
    h4.style.color = '#fff'
    h4.style.textShadow = '2px 2px 3px #454747'
    h4.style.fontSize = '35px'
    h4.style.fontFamily = 'Marhey'
    h4.style.textAlign = 'center'

    /* 
        Perform Action(use parent element): 
        
        First Param: New Element; 
        Second Param: Parent Child 
    */
    header.replaceChild(h4, pHeader)

    pHeader.addEventListener('mouseleave', function () {
    
        h4.textContent = originalHeader
    
        header.replaceChild(h4, pHeader)
    })
})

