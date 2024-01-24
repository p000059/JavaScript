"use strict"

window.addEventListener('scroll', (event) => {
    
    if(window.pageYOffset > 200){
        let msg = '200px Max'
        console.log(msg)
        document.querySelector('#scroll-div').innerHTML = msg
    }
})