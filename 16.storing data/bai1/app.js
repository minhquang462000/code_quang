const email = document.getElementById("email");
const pw = document.getElementById("pw");
const cfPass = document.getElementById("cf-pw");
const btn = document.getElementById("btn");
const eyePw = document.getElementById("eye-pw");
const eyeCf = document.getElementById("eye-cf");
const emailFormat =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// Hienthi Password
let flag = true;
eyePw.addEventListener("click", () => {
  if (flag) {
    pw.setAttribute("type", Text);
    flag = false;
  } else {
    pw.setAttribute("type", "password");
    flag = true;
  }
});
eyeCf.addEventListener("click", () => {
  if (flag) {
    cfPass.setAttribute("type", Text);
    flag = false;
  } else {
    cfPass.setAttribute("type", "password");
    flag = true;
  }
});
// Register--------------------
btn.addEventListener("click", () => {
  const username = {
    email: email.value,
    password: pw.value,
  };
  const jsonUser = JSON.stringify(username);
  if (email.value == "") {
    alert("Hãy nhập địa chỉ Email");
  } else if (!emailFormat.test(email.value)) {
    alert("Vui lòng nhập đúng địa chỉ email");
    email.value = "";
  } else if (pw.value == "") {
    alert("Bạn chưa nhập password");
  } else if (cfPass.value != pw.value) {
    alert("Password và Confirm Password phải giống nhau");
  } else {
    localStorage.setItem(username, jsonUser);
    alert("Đăng ký thành công");
    window.location.href = "login.html";
  }
});
