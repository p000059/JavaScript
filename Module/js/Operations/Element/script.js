(function () {
    let dateNow = new Date();
    let dateYear = dateNow.getFullYear();
    document.getElementById('dateYear').innerHTML = dateYear

    const nameUser = 'marcelo'
    const element = document.querySelector('.top-bar p')

    if(nameUser){
        nameUser.className = 'nameUser'

        const topBarElement = document.createElement('div')
        topBarElement.className = "top-bar"
        topBarElement.innerHTML = `<p> Welcome <b>${nameUser}</b></p>`

        const elementParent = document.querySelector('.hero')
        elementParent.insertBefore(topBarElement, elementParent.firstElementChild)
    }
})()