let currentDate = new Date();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let amOrPm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
if (hours < 10) {
  hours = `0${hours}`;
}

let time = `${hours}:${minutes} ${amOrPm}`;

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dayOfWeek = daysOfWeek[currentDate.getDay()];

let day = currentDate.getDate();
if (day < 10) {
  day = `0${day}`;
}

let month = months[currentDate.getMonth()];
let year = currentDate.getFullYear();
let date = `${dayOfWeek}, ${day} ${month}, ${year}`;

document.getElementById("currentTime").textContent = time;
document.getElementById("currentDay").textContent = date;
