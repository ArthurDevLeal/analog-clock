let ps = document.querySelector(".p_s");
let pm = document.querySelector(".p_m");
let ph = document.querySelector(".p_h");
let digital = document.querySelector(".digital");
function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    digital.innerHTML = `${fixZero(hour)}:${fixZero(min)}:${fixZero(sec)}`;

    let sdeg = (360 / 60) * sec - 90;
    let mdeg = (360 / 60) * min - 90;
    let hdeg = (360 / 12) * hour - 90;

    ps.style.transform = `rotate(${sdeg}deg)`;
    pm.style.transform = `rotate(${mdeg}deg)`;
    ph.style.transform = `rotate(${hdeg}deg)`;
}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}
setInterval(showTime, 1000);
showTime()