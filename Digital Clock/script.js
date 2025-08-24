
const hourEL = document.getElementById("hour");
const minuuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");
const dayEL = document.getElementById("day");

const Daysoftweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function UPClock(){
const now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

let day = Daysoftweek [now.getDay()];

let ampm = h >= 12 ? "PM" : "AM";
h = h % 12 || 12;
h = h < 10 ? "0" + h : h ;
m = m < 10 ? "0" + m : m ;
s = s < 10 ? "0" + s : s ;

hourEL.textContent = h ;
minuuteEL.textContent = m;
secondEL.textContent = s;
ampmEL.textContent = ampm;
dayEL.textContent = day;

requestAnimationFrame(UPClock);
}
UPClock();