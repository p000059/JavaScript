
document.addEventListener('DOMContentLoaded', function(){

    let exec = document.querySelector('#exec')

    
    exec.addEventListener('click',registerForm)
})


txtName.value = 'Marcelo'
txtName.disabled = true

function registerForm(){
    
    const contract = document.querySelector('#contract')
    let checked = contract.checked
    
    const txtName = document.querySelector('#txtName')
    const txtEmail = document.querySelector('#txtEmail')
    
    if(checked){
        checked.disabled = false
    } else {
        checked.disabled = true
    }
}