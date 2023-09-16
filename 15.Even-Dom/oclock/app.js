let hour = document.getElementById("hour");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

setInterval(() => {
    let time = new Date();
    let seconds = time.getSeconds()
    if (seconds < 10) {
        second.innerHTML = "0" + seconds;
    }else{
        second.innerHTML = seconds;
    }
   
}, 1000)
setInterval(() => {
    let time = new Date();
    let minutes = time.getMinutes()
    if (minutes < 10) {
        minute.innerHTML = "0" + minutes;
    }else{
        minute.innerHTML = minutes;
    }
   
}, 1000)
setInterval(() => {
    let time = new Date();
    let hours = time.getHours()
    if (hours  < 10) {
        hours .innerHTML = "0" + hours ;
    }else{
        hour.innerHTML = hours ;
    }
   
}, 1000)