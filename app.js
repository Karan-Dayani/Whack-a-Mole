const playSection = document.querySelector(".play-section");
const playButton = document.querySelector(".button");
const gameArea = document.querySelector(".game-area")

playButton.onclick = () => {
    playSection.classList.add("fadeOut");
    gameArea.classList.replace("fadeOut", "fadeIn")
}