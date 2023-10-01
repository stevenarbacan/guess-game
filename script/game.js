"use strict";
const number = document.querySelector(".number");
const score = document.querySelector("#score");
const playerStatus = document.querySelector("#status");
const highScore = document.querySelector("#highScore");
const numberBtn = document.querySelector(".number-btn");
const resetBtn = document.querySelector(".reset-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const modalText = document.querySelector("#modalText");

let secretNumber, playerScore, playing;
let playerHighScore = 0;

const init = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  playerScore = 20;
  number.textContent = "?";
  playerStatus.textContent = "Guessing the number...";
  score.textContent = playerScore;
  highScore.textContent = playerHighScore;
  guessNumber.value = "";
  playing = true;
};

function backgroundSound(audioName, loop) {
  let audio = new Audio(audioName);
  audio.loop = loop;
  audio.play();
}

backgroundSound("../sound/background-sound.mp3", true);

init();

const playerMessage = (guessNumber, secretNumber) => {
  playerStatus.textContent = `${
    guessNumber > secretNumber ? "Too high📈" : "Too Low📉"
  }`;
  playerScore--;
  score.textContent = playerScore;
};

const openModal = (playerScore) => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalText.textContent = `\nYour score: ${playerScore}\nHighest score: ${playerHighScore}\nCongratulations, You win the game🏆!`;
  backgroundSound("../sound/congratulations-sound.mp3", false);
};

const hideModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  backgroundSound("../sound/button-sound.mp3", false);
};

numberBtn.addEventListener("click", () => {
  if (playing) {
    const guessNumber = Number(document.querySelector("#guessNumber").value);
    if (!guessNumber) {
      playerStatus.textContent = "No Number!";
    } else {
      if (guessNumber === secretNumber) {
        playerStatus.textContent = "Congratulations, You win🏆!";
        number.textContent = secretNumber;
        if (playerScore > playerHighScore) {
          playerHighScore = playerScore;
        }
        highScore.textContent = playerHighScore;
        playing = false;
        openModal(playerScore);
      } else {
        playerMessage(guessNumber, secretNumber);
      }
    }
  }
  backgroundSound("../sound/button-sound.mp3", false);
});

resetBtn.addEventListener("click", () => {
  init();
  score.textContent = playerScore;
  backgroundSound("../sound/button-sound.mp3", false);
});

closeModal.addEventListener("click", () => {
  hideModal();
  backgroundSound("../sound/button-sound.mp3", false);
});
overlay.addEventListener("click", () => {
  hideModal();
  backgroundSound("../sound/button-sound.mp3", false);
});
