const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minuitesElement = document.getElementById("mins");
const secondsElement = document.getElementById("secs");

const newYear = "1 January 2023";

function countdown() {
    const newYearDate = new Date(newYear)
    const currentDate = new Date;

    const totalSeconds = (newYearDate - currentDate) / 1000
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minuites = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
   minuitesElement.innerHTML = formatTime(minuites);
    secondsElement.innerHTML = formatTime(seconds);

    console.log(days, hours, minuites, seconds);
}
function formatTime(time) {
    return time < 10 ? `0${time}` :time;
}
countdown();

setInterval(countdown, 1000);
 