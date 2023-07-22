
  // Chuyển login-Signup
  const formContrainer = document.querySelector(".form_contrainer"),
  signUpBtn = document.querySelector("#signup"),
  logInBtn = document.querySelector("#login");

  signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContrainer.classList.add("active");
  });

  logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContrainer.classList.remove("active");
  });
  // end login-Signup

  const passWordInput = document.querySelector(".password_fail input");
  const requiList = document.querySelector(".requi_list li");

  const requiListItem = [
      {regex: /.{8,}/, index : 0 },
      {regex: /[0-9]/,index: 1 },
      {regex: /[a-z]/, index: 2 },
      {regex: /[^A-Za-z0-9]/, index : 3 },
      {regex: /[A-Z]/, index : 4 },
  ]

  passWordInput.addEventListener("keyup", (e) => {
    requiListItem.forEach(item => {
      const isValid = item.regex.test(e.target.value);
      const requiList = requiListItem[item.index];
      if(isValid) {
        requiList.classList.add("valid");
        requiList.firstElemenChild.className=" fa-solid fa-check ttext-green-600";
      }else{
        requiList.classList.add("valid");
        requiList.firstElemenChild.className=" fa-solid fa-check";
      }
    });
  });

  function singnIn() {
    let  usename =document.getElementById(`useName`).value;
    let password = document.getElementById(`passWord`).value;
    let use = {
        usename:usename,
        password:password,
    };
    
  }