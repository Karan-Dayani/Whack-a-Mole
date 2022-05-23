const playSection = document.querySelector(".play-section");
const playButton = document.querySelector(".button");
const gameArea = document.querySelector(".game-area")
const gameOverSection = document.querySelector(".game-over-section");
const playAgainButton = document.querySelector(".play-again-btn");

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector(".time-left");
const score = document.querySelector(".points");
const finalScore = document.querySelector(".final-score");

let result = 0;
let hitPositon;
let currentTime = 60;
let timerId = null;
let countDownTimerID;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPositon = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener("click", () => {
        if (square.id == hitPositon) {
            result++;
            score.textContent = result;
            hitPositon = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 800);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerID);
        clearInterval(timerId);
        // alert("GAME OVER! your final score is " + result);
        finalScore.textContent = result;
        gameArea.classList.replace("fadeIn", "fadeOut");
        gameOverSection.classList.replace("fadeOut", "fadeIn");
    }
}

playButton.onclick = () => {
    playSection.classList.add("fadeOut");
    gameArea.classList.replace("fadeOut", "fadeIn")
    setTimeout(() => {
        moveMole();
        countDownTimerID = setInterval(countDown, 1000);
    }, 1000);
}

playAgainButton.onclick = () => {
    gameOverSection.classList.replace("fadeIn", "fadeOut");
    setTimeout(() => {
        gameArea.classList.replace("fadeOut", "fadeIn");
    }, 1000);
    result = 0;
    currentTime = 60;
    score.textContent = result;
    timeLeft.textContent = currentTime;
    squares.forEach(square => {
        square.classList.remove("mole");
    })
    setTimeout(() => {
        moveMole();
        countDownTimerID = setInterval(countDown, 1000);
    }, 2300);
}