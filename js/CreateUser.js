let objUser = new Object();

function saveUser(){

    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeatPassword').value;

    
    
    if(password === repeatPassword){
        
        objUser.user = user;
        objUser.email = email;    
        objUser.password = password;

    } else {

        objUser.user = "";
        objUser.email = "";
        objUser.password = "";
        console.log("Senha não confere")
    }

    console.log(objUser.user, objUser.email, objUser.password);
}