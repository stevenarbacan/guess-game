"use strict";
const startBtn = document.querySelector("start-btn");
const aboutBtn = document.querySelector(".about-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

function backgroundSound(audioName, loop) {
  let audio = new Audio(audioName);
  audio.loop = loop;
  audio.play();
}

backgroundSound("./sound/background-sound.mp3", true);

aboutBtn.addEventListener("click", () => {
  showModal();
  backgroundSound("./sound/about-sound.mp3", false);
});

closeModal.addEventListener("click", () => {
  hideModal();
  backgroundSound("./sound/about-sound.mp3", false);
});

startBtn.addEventListener("click", () => {
  backgroundSound("./sound/button-sound.mp3", false);
});

overlay.addEventListener("click", () => {
  hideModal();
  backgroundSound("./sound/about-sound.mp3", false);
});
