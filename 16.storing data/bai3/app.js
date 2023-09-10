const closeWindow = document.getElementById("close");
const container = document.querySelector(".container");
const changeWindow = document.querySelector("#change");
closeWindow.addEventListener("click", () => {
  container.style.display = " none";
});
setInterval(() => {
  container.style.display = " block";
}, 5000);
changeWindow.addEventListener("click", () => {
  window.location.href = "get.html";
});
const no =document.querySelector('.no')
no.addEventListener('click',()=>{
    container.style.display = " none";
})