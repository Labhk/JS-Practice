
let today = new Date();
let day = today.getDate();
let hours = (today.getHours() % 12 ) || 12;;
let minutes = today.getMinutes().toString().padStart(2, '0'); 
let sec = today.getSeconds().toString().padStart(2, '0'); 

let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

console.log(`Today's Day - ${days[day]}`)

let AM_PM = today.getHours() < 12 ? "AM" : "PM";

console.log(`Current Time - ${hours} : ${minutes} : ${sec} ${AM_PM}`);
