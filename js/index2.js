var signUpName = document.getElementById('signupName')
var signUpEmail = document.getElementById('signupEmail')
var signUpPassword = document.getElementById('signupPassword')
var signUpButton = document.getElementById('signUpButton')
var massage = document.getElementById('massage')




var allUsers = []

if (localStorage.getItem("users") != null) {
    allUsers=JSON.parse(localStorage.getItem('users'))

}

function signUp() {

    var user = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }

    if (
        signUpName.value = '' ||
        signUpEmail.value == '' ||
        signUpPassword == ''
    ) { massage.innerHTML = 'All inputs is required' }


    else if (oldEmail()) {
        massage.innerHTML = 'email already exists'
    }



    else {
        allUsers.push(user)
        localStorage.setItem('users', JSON.stringify(allUsers))
        massage.innerHTML = 'success'
    }

}




function oldEmail() {
    for (var i = 0; i < allUsers.length; i++) {
        if (signUpEmail.value == allUsers[i].email) {
            return true;

        }

    }
    return false;

}


var email = document.getElementById('email')
var password = document.getElementById('password')
var loginMassage = document.getElementById('loginMassage')
var loginbtn = document.getElementById('loginbtn')

function login() {
    if (email.value == '' ||
        password.value == ''
    ) 
    {loginMassage.innerHTML = 'All inputs is required'}
       else if( isOldUser()==false){
        {loginMassage.innerHTML = 'incorrect email or password'}
       }
       else{
        loginbtn.href ='index2.html'
       }
}

function isOldUser(){
    for(var i=0 ; i < allUsers.length; i++)
    {
        if(email.value==allUsers[i].email && password.value==allUsers[i].password)


        { 
            localStorage.setItem('currentUser',JSON.stringify(allUsers[i].name))
           

            return true;
        }
    }
    return false;
}




var home =document.getElementById('home')
var username = JSON.parse(localStorage.getItem('currentUser'))
if(username)
{
 
    home.innerHTML= `Welcom ${username}`
}









