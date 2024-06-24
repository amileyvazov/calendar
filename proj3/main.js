const monthName = document.getElementById("month-name");

const dayName = document.getElementById("day-name");

const dayNum =  document.getElementById("day-number");

const yearElm = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthName.innerHTML = date.toLocaleDateString("en",{ month: "long"});
dayName.innerHTML = date.toLocaleDateString("en",{ weekday : "long"});
dayNum.innerText = date.getDate();
yearElm.innerText = date.getFullYear();