function register(){
    let formcont = document.getElementById('register');
    let uname1 = formcont.elements['username1'].value;
    let uname2 = formcont.elements['username2'].value;
    let phone = formcont.elements['phone'].value;
    let pass1 = formcont.elements['pass1'].value;
    let pass2 = formcont.elements['pass2'].value;

    if(uname1 === "" || uname1 === null){
        alert("FirstName cannot empty!");
    }else if(uname2 === "" || uname2 === null){
        alert("LastName cannot empty!");
    }else if(phone.length != 10){
        alert("Phone number must be 10 digits!");
    }else if(pass1.length < 8){
        alert("Password must be 8 character!");
    }else if(pass1 != pass2 && pass2 === ""){
        alert("Password Not match!");
    }

}