// Login Form

function validateForm_1() {
    // Get form input values
let Login_Email = document.getElementById("LoginForm-Email").value.trim();
let Lodin_Password = document.getElementById("LoginForm-Password").value;

// Regular expression to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Check if fields are empty
if (!Login_Email || !Lodin_Password) {
    alert("Please fill in all fields.");
    return false;
}

// Check email format using the regex
if (!emailRegex.test(Login_Email)) {
    alert("Please enter a valid email address.");
    return false;
}

return true;

}


// SingUp Form

function validateForm_2() {
// Get form input values
let singUp_UserName = document.getElementById("SignUpForm_UserName").value.trim();
let singUp_Email = document.getElementById("SignUpForm_Email").value.trim();
let singUp_Password = document.getElementById("SignUpForm_Password").value;

// Regular expression to validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Check if fields are empty
if (!singUp_UserName || !singUp_Email || !singUp_Password) {
    alert("Please fill in all fields.");
    return false;
}

// Check email format using the regex
if (!emailRegex.test(singUp_Email)) {
    alert("Please enter a valid email address.");
    return false;
}

// Check password length
if (/\d/.test(singUp_UserName) ) {
    alert("Please enter a valid name.");
    return false;
}

 // Check password length
 if (singUp_Password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
}

return true;
}

let firstField = document.querySelector(".firstField");
window.onload = function(){
    firstField.focus();
}


// function changeStyle() {
//     // Get the element with the ID 'heading'
//     const headingElement = document.getElementById('icon');

//     // Change the style of the element
//     headingElement.style.position = 'absolute';
//     headingElement.style.color = 'green';
//     headingElement.style.fontSize= '17px';
// }


// document.getElementById("SignUpForm").onsubmit = function(e){
//     singUp_UserName = false;
//     singUp_Email = false;
//     singUp_Password = false;

//     if(singUp_UserName != Number && singUp_Email != Number){
//         singUp_UserName = true;
//         singUp_Email = true;
//     }

//     if(singUp_Password.length >= 8){
//         singUp_Password = true;
//     }


//     if(singUp_Email === false || singUp_Password === false || singUp_UserName === false){
//         e.preventDefault();
//     }
// }

