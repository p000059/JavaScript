(function(){
    let year = new Date()
    let dateYear = year.getFullYear();
    document.getElementById('timeFooter').innerHTML = dateYear
  
    
    
})()

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')

txtName.value = 'Marcelo'
txtName.disabled = true

const btn = document.querySelector('form input[type="submit"]')
btn.disabled = true


function registerForm(){
    const contract = document.querySelector('#contract')
    let checked = contract.checked

    if(checked){
        btn.disabled = false
    } else {
        btn.disabled = true
    }
}