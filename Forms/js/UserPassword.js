let objUser = new Object();

function saveLogin(){

    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    
    objUser.user = user;
    objUser.password = password;

    console.log(user, password);
}