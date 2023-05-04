let minutes = 25;
let seconds = 0;
let milliseconds = 0;
let interval;

const startTimer = () => {
  interval = setInterval(() => {
    milliseconds += 10;
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds--;
    }
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    displayTimer();
  }, 10);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  clearInterval(interval);
  minutes = 25;
  seconds = 0;
  milliseconds = 0;
  displayTimer();
};

const displayTimer = () => {
  document.getElementById("minutes-holder").innerText = formatTime(minutes);
  document.getElementById("seconds-holder").innerText = formatTime(seconds);
  
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
