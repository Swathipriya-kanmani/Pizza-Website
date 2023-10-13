// const signUp = e => {
//     let fullname = document.getElementById('fullname').value,
//         username = document.getElementById('username').value,
//         email = document.getElementById('email').value,
//         phonenumber = document.getElementById('phonenumber').value,
//         password1 = document.getElementById('password1').value,
//         password2 = document.getElementById('password2').value;

//     let formData = JSON.parse(localStorage.getItem('formData')) || [];

//     let exist = formData.length && 
//     JSON.parse(localStorage.getItem('formData')).some(data => 
//         data.username == username && data.email == email);

//     if(!exist){
//         formData.push({ fullname, username, email, phonenumber,password1,password2 });
//         localStorage.setItem('formData', JSON.stringify(formData));
//         document.querySelector('form').reset();
//         document.getElementById('fullname').focus();
//         alert("Account Created.\n\nPlease Sign In using the link below.");
//     }
//     else{
//         alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
//     }
//     e.preventDefault();

// }

const signUp = e => {
    e.preventDefault();

    let fullname = document.getElementById('fullname').value.trim(),
        username = document.getElementById('username').value.trim(),
        email = document.getElementById('email').value.trim(),
        phonenumber = document.getElementById('phonenumber').value.trim(),
        password1 = document.getElementById('password1').value.trim(),
        password2 = document.getElementById('password2').value.trim();

    if (fullname === '' || username === '' || email === '' || phonenumber === '' || password1 === '' || password2 === '') {
        alert("Please fill in all the required fields.");
        return;
    }

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.username == username && data.email == email);

    if(!exist){
        formData.push({ fullname, username, email, phonenumber,password1,password2 });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fullname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
}

function signIn(e) {
    
    let username = document.getElementById('username').value, 
    password = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.username == username && data.password1 == password);
    
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        
        window.location.href = "Address.html";
        alert("login successfully")
    }
    e.preventDefault();

    
}




