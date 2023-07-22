const 
  home = document.querySelector(".home"),
  form = document.querySelector(".form_signup"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  // check input errors messages
  emailFail = form.querySelector(".email_fail"), 
  emailInput = emailFail.querySelector(".usename"),
  passFail = form.querySelector(".password_fail"),
  passInput = passFail.querySelector(".password_one"),
  cpassdFail = form.querySelector(".cpassword_fail"),
  cpassdInput = cpassdFail.querySelector(".password_two");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

// check email Validation


function checkEmail(){
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!emailInput.value.match(emailPattern)){
    return emailFail.classList.add("invalid");
  }
  emailFail.classList.remove("invalid");
}

function createPassword (){
  const passPatten = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if(!passInput.value.match(passPatten)){
    return passFail.classList.add("invalid");
  }
  passFail.classList.remove("invalid");
}

function cPassword(){
  if(passInput.value !== cpassdInput.value || cpassdInput.value === "" ){
    return cpassdFail.classList.add("invalid");
  }
  cpassdFail.classList.remove("invalid");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  createPassword();
  cPassword();
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPassword);
  cpassdInput.addEventListener("keyup", cPassword);

  if(!emailFail.classList.contains("appear-error") &&
     !passFail.classList.contains("appear-error") &&
     !cpassdFail.classList.contains("appear-error"))
  {
    location.href = form.getAttribute("action");
  }
});
