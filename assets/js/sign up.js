const form = document.getElementById('form');
const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}

const SuccessMsg2 = (usernameVal2) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}
const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.value.trim();
    const usernameVal2 = username2.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //username
    if(usernameVal === ""){
        setErrorMsg(username, 'Este espacio no puede estar vacio');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 caracteres');
    }
    else{
        setSuccessMsg(username);
    }
    if(usernameVal2 === ""){
        setErrorMsg(username2, 'Este espacio no puede estar vacio');
    }
    else if(usernameVal2.length <=2){
        setErrorMsg(username, 'min 3 caracteres');
    }
    else{
        setSuccessMsg(username2);
    }


    //last name

    if(lastnameVal === ""){
        setErrorMsg(lastname, 'Este espacio no puede estar vacio');
    }
    else if(lastnameVal.length <=2){
        setErrorMsg(lastname, 'min 3 caracteres');
    }
    else{
        setSuccessMsg(lastname);
    }

    //email
    if(emailVal === ""){
        setErrorMsg(email, 'email no puede estar vacio');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email no valido');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Contraseña no puede estar vacia');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min 8 caracteres');
    }
    else{
        setSuccessMsg(password);
    }

    //confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'confirmar contraseña no puede estar vacia');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'No es igual!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    SuccessMsg(usernameVal);


}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkEmail();
  createPass();
  confirmPass();


  //calling function on key up
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});