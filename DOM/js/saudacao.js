(function () {
    let dateNow = new Date();
    let dateYear = dateNow.getFullYear();
    document.getElementById('dateYear').innerHTML = dateYear

    const nameUser = 'Marcelo'
    const element = document.querySelector('.top-bar p')

    if(nameUser === 'Marcelo'){
        element.innerHTML = 'Welcome, ' + nameUser        
    } else {
        const removeElement = element.parentElement
        removeElement.parentElement.removeChild(removeElement)    
    }
})()