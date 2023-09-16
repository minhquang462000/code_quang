let hourOne = document.getElementById("h1");
let hourTwo = document.getElementById("h2");
let MinutesOne = document.getElementById("m1");
let MinutesTwo = document.getElementById("m2");
let secondOne = document.getElementById("sOne");
let secondTwo = document.getElementById("s2");
setInterval(() => {
  MinutesOne.innerHTML = 0;
}), 1000;
setInterval(() => {
  let secondOneNum = secondOne.innerText;
  let i = Number(secondOneNum);
  if (i == 0) {
    secondOne.innerHTML = 5;
  } else {
    secondOne.innerHTML = i - 1;
  }
}, 10000);
setInterval(() => {
  let secondTwoNum = secondTwo.innerText;
  let i = Number(secondTwoNum);
  if (i == 0) {
    secondTwo.innerHTML = 9;
  } else {
    secondTwo.innerHTML = i - 1;
  }
}, 1000);
setInterval(() => {
  let MinutesTwoNum = MinutesTwo.innerText;
  let i = Number(MinutesTwoNum);
  if (i == 0) {
    MinutesTwo.innerHTML = 9;
  } else {
    MinutesTwo.innerHTML = i - 1;
  }
}, 60000);

setInterval(() => {
  alert("Kết thúc đếm ngược");
}, 600000);
let image = document.getElementById("img");
let text = document.getElementById("tex");
console.log("<=======================>");
console.log("=== Nguyen Minh Quang ===");
console.log("<=======================>");
setTimeout(() => {
  text.style.opacity = 1;
  image.style.display = 'inline';
}, 10000)
image.addEventListener("click",()=>{
  text.innerHTML="Bạn nhận được 1 đĩa gà quay"
})
