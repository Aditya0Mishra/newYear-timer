const newYears = "1 Jan 2024";
const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minutesel = document.getElementById("minutes");
const secondsel = document.getElementById("seconds");
function countdown() {
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);
  console.log(hours);

  daysel.innerHTML = days;
  hoursel.innerHTML = formatTime(hours);
  minutesel.innerHTML = formatTime(minutes);
  secondsel.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
