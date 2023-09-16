const email = document.getElementById("email");
const password = document.getElementById("pw");
const checkPass = document.getElementsByClassName("fa-solid fa-eye");
// console.log(checkPass[0]);
const login = document.querySelector("#btn");
let checkbox = document.getElementById("checkbox");
const emailFormat =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// CheckPass--------------
let flag = true;
checkPass[0].addEventListener("click", () => {
  if (flag) {
    pw.setAttribute("type", Text);
    flag = false;
  } else {
    pw.setAttribute("type", "password");
    flag = true;
  }
});

//UserName Object--------------
login.addEventListener("click", () => {
  if (email.value == "") {
    alert("Bạn chưa nhập email");
  } else if (!emailFormat.test(email.value)) {
    alert("Vui lòng nhập đúng địa chỉ email");
  } else if (password.value == "") {
    alert("Bạn chưa nhập password");
  } else {
    console.log(checkbox.checked);
    const userName = {
      email: email.value,
      password: password.value,
      checkbox: checkbox.checked,
    };
    const json = JSON.stringify(userName);
    if (checkbox.checked) {
      document.cookie = `user=${json}; expires=${new Date(
        "2023-09-11 24:00:00"
      ).toUTCString()}`;
    }
    localStorage.setItem(userName, json);
    // alert("Đăng ký thành công");
  }
});