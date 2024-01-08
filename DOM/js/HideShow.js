var btnA = document.querySelector('#btnA')

btnA.addEventListener('click', function(){
    let containerA = document.querySelector('.containerA')

    if(containerA.style.display == 'none'){
        containerA.style.display = 'block'
    } else {
        containerA.style.display = 'none'
    }
})

var btnB = document.querySelector('#btnB')

btnB.addEventListener('click', function(){
    let ctn = document.querySelector('.containerB')
    console.log(ctn)
    ctn.classList.toggle('hide')
})