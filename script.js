let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

startStopBtn.addEventListener("click", () => {
    if (isRunning) {
        stopStopwatch();
        startStopBtn.textContent = "Start";
    } else {
        startStopwatch();
        startStopBtn.textContent = "Stop";
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener("click", () => {
    stopStopwatch();
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    if (isRunning) {
        startStopBtn.textContent = "Start";
        isRunning = false;
    }
});
