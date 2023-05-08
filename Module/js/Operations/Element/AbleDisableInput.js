(function(){
    let dateNow = new Date();
    let dateYear = dateNow.getFullYear();
    document.getElementById('dateYear').innerHTML = dateYear
})()

const txtEmail = document.getElementById('txtEmail')

function editEmail(){
    txtEmail.disable = false
    txtEmail.focus()
}

function disableEmail(){
    txtEmail.disable = true
}