const startButton = document.getElementById("startButton");

const timerDisplay = document.getElementById("timerDisplay");
const progressBarFill = document.createElement("div");
progressBarFill.id = "progressBarFill";
const progressBar = document.getElementById("progressBar");
progressBar.appendChild(progressBarFill);

const stopButton = document.getElementById("stopButton");
runState = false;

const configDiv = document.getElementById("config");
const gameDiv = document.getElementById("game");
const label = document.getElementById("stateLabel");


interval = 0;
let hitCount = 0;

const colors = {
    timer0: "timer0-bg",
    timer1: "timer1-bg",
    timer2: "timer2-bg",
    timer3: "timer3-bg",
    timer4: "timer4-bg"
};

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

console.log("Initialized...")

function startTimer() {
    runState = true; 
    console.log("startTimer started...")
    configDiv.style.display = "none";
    gameDiv.style.display = "block";

    const minTime1 = (parseFloat(document.getElementById("minTime1").value)*60);
    const maxTime1 = (parseFloat(document.getElementById("maxTime1").value)*60);

    const Time2 = parseInt(document.getElementById("Time2").value);

    const minTime3 = parseInt(document.getElementById("minTime3").value);
    const maxTime3 = parseInt(document.getElementById("maxTime3").value);

    const minTime4 = parseInt(document.getElementById("minTime4").value);
    const maxTime4 = parseInt(document.getElementById("maxTime4").value);

    const timer1Duration = getRandomTime(minTime1, maxTime1);
    const timer3Duration = getRandomTime(minTime3, maxTime3);
    const timer4Duration = getRandomTime(minTime4, maxTime4);
    
    progressBarFill.style.width = "0";
    roundInfo.textContent = " ";
    updateBackgroundColor("timer1");
    if (!runState) return;

    countdown("Rest", timer1Duration, () => {
        updateBackgroundColor("timer2");
        
        roundInfo.textContent = `Hit for ${timer3Duration} - Hold for ${timer4Duration}`;
        const timer2Duration = Time2;
        if (!runState) {
            return; // If runState is false, immediately end the startTimer function
        }
        
        countdown("Prep", timer2Duration, () => {
            updateBackgroundColor("timer3");
            if (!runState) {
                return; // If runState is false, immediately end the startTimer function
            }
            countdown("Hit", timer3Duration, () => {
                updateBackgroundColor("timer4");
                if (!runState) {
                    return; // If runState is false, immediately end the startTimer function
                }
                updateHitCounter();
                countdown("Hold", timer4Duration, () => {
                    roundInfo.textContent = " ";
                    startTimer();
                });

            });
        });
    });
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function countdown(label, duration, onComplete) {
    console.log(`Starting ${label} timer for ${duration}...`);

    soundID = label.toLowerCase() + "Sound";
    console.log(`Playing ${soundID}`);
    var sound = document.getElementById(soundID);
    sound.play();

    stateLabel.textContent = label;
    let timeLeft = duration;

    interval = setInterval(() => {
        timeLeft--;
        const progressPercentage = ((duration - timeLeft) / (duration  - 1)) * 100;
        progressBarFill.style.width = `${progressPercentage}%`;
        timerDisplay.textContent = `${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            progressBarFill.style.width = `0%`;
            console.log(`${label} timer Complete...`);

            onComplete();
        }
    }, 1000);
}

function updateHitCounter(){
    hitCount ++;
    console.log(`Hit total = ${hitCount}`);
    const hitTotal = document.getElementById("hitTotal");
    hitTotal.textContent = `Great job gooner! You've hit ${hitCount} times!`;
}

function updateBackgroundColor(timerName) {
    const bgColorClass = colors[timerName];
    document.body.className = bgColorClass;
}

function stopTimer() {
    console.log("stopTimer click...")
    runState = false;
    stateLabel.textContent = "POPPER TIMER";
    roundInfo.textContent = " ";
    clearInterval(interval);
    configDiv.style.display = "block";
    gameDiv.style.display = "none";
    updateBackgroundColor("timer0");

}
