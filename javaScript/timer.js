"use strict";

let countdownInterval;
let totalSeconds = 0;
let remainingSeconds = 0;
let paused = false;
let audio = new Audio("./alarm-clock.mp3");

function renderTimer(parameters) {
  let navigationHeader = document.querySelector(".navigationHeader");
  navigationHeader.innerHTML = `
    <img src="./images/arrow.png" alt="arrow" class="arrow">
  `;

  let minutes = getMinutes(parameters);

  let wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = `
    <div class="visual-timer">
      <div class="circular-progress"></div>
      <img src="./images/cooking.png" alt="cooking shown" class="cooking">
      <img src="./images/done.png" alt="cooking-done" class="cooking-done hidden">
    </div>
    <div class="numeric-timer">
      <span class="minutes">${minutes < 10 ? "0" + minutes : minutes}</span>:<span class="seconds">00</span>
    </div>
    <div class="button-timer">
      <button class="button-start shown">Start</button>
      <button class="button-pause hidden">Pause</button>
      <button class="button-continue hidden">Continue</button>
      <button class="button-reset">Reset</button>
    </div>
  `;

  let arrow = document.querySelector(".arrow");
  let buttonStart = document.querySelector(".button-start");
  let buttonPause = document.querySelector(".button-pause");
  let buttonContinue = document.querySelector(".button-continue");
  let buttonReset = document.querySelector(".button-reset");
  let cookingEgg = document.querySelector(".cooking");
  let cookingDone = document.querySelector(".cooking-done");

  arrow.addEventListener("click", renderQuestionPage);

  buttonStart.addEventListener("click", () =>
    countDownNumericTimer(minutes, buttonStart, buttonPause, buttonContinue, cookingEgg, cookingDone)
  );

  buttonReset.addEventListener("click", () =>
    resetTimer(minutes, buttonStart, buttonPause, buttonContinue, cookingEgg, cookingDone)
  );
}

function renderQuestionPage() {
  renderStep1();
}

function renderVisualTimer(minutes) {
  totalSeconds = minutes * 60;

  let progressStartValue = 0;
  const circularProgress = document.querySelector(".circular-progress");

  let progressInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(progressInterval);
    }

    progressStartValue = ((minutes * 60 - totalSeconds) / (minutes * 60)) * 360;

    circularProgress.style.background = `conic-gradient(#f9ca24 ${progressStartValue}deg, #fff 0deg)`;
  }, 1000);
}

function countDownNumericTimer(minutes, buttonStart, buttonPause, buttonContinue, cookingEgg, cookingDone) {
  renderVisualTimer(minutes);

  cookingEgg.classList.add("bounce");
  buttonStart.classList.remove("shown");
  buttonStart.classList.add("hidden");
  buttonPause.classList.remove("hidden");
  buttonPause.classList.add("shown");
  buttonPause.innerHTML = `
    <div class="pause">
      <img src="./images/pause.png" alt="pause">
      <span>Pause</span>
    </div>
  `;

  totalSeconds = minutes * 60;

  function updateCountdown() {
    // let audio = new Audio("./alarm-clock.mp3");
    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      document.querySelector(".minutes").innerText = "00";
      document.querySelector(".seconds").innerText = "00";
      buttonPause.classList.add("inactive");
      cookingEgg.classList.remove("shown");
      cookingEgg.classList.add("hidden");
      cookingDone.classList.add("shown");
      cookingDone.classList.remove("hidden");
      audio.play();
      buttonPause.disabled = "disabled";
    } else {
      const minutesNew = Math.floor(totalSeconds / 60);
      const secondsNew = totalSeconds % 60;
      document.querySelector(".minutes").innerText = minutesNew.toString().padStart(2, "0");
      document.querySelector(".seconds").innerText = secondsNew.toString().padStart(2, "0");
      totalSeconds--;
    }
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);

  buttonPause.addEventListener("click", () =>
    pauseTimer(countdownInterval, buttonPause, buttonContinue, cookingEgg)
  );

  buttonContinue.addEventListener("click", () =>
    continueTimer(buttonPause, buttonContinue, updateCountdown, cookingEgg, cookingDone)
  );
}

function pauseTimer(countdownInterval, buttonPause, buttonContinue, cookingEgg) {
  clearInterval(countdownInterval);

  remainingSeconds = totalSeconds;
  paused = true;

  cookingEgg.classList.remove("bounce");
  buttonPause.classList.remove("shown");
  buttonPause.classList.add("hidden");
  buttonContinue.classList.remove("hidden");
  buttonContinue.classList.add("shown");
  buttonContinue.innerHTML = `
    <div class="continue">Continue</div>
  `;
}

function continueTimer(buttonPause, buttonContinue, updateCountdown, cookingEgg, cookingDone) {
  paused = false;

  buttonContinue.classList.remove("shown");
  buttonContinue.classList.add("hidden");
  buttonPause.classList.remove("hidden");
  buttonPause.classList.add("shown");
  cookingEgg.classList.add("bounce");

  clearInterval(countdownInterval);

  totalSeconds = remainingSeconds;

  countdownInterval = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      buttonPause.classList.remove("shown");
      buttonPause.classList.add("inactive");
      cookingEgg.classList.remove("shown");
      cookingEgg.classList.add("hidden");
      cookingEgg.classList.remove("bounce");
      cookingDone.classList.add("shown");
      cookingDone.classList.remove("hidden");
    } else {
      updateCountdown();
    }
  }, 1000);
}

function getMinutes(parameters) {
  if (
    parameters.cookingDirection === "Soft" &&
    parameters.size === "Small"
  ) {
    return 6;
  } else if (
    parameters.cookingDirection === "Soft" &&
    parameters.size === "Medium"
  ) {
    return 7;
  } else if (
    parameters.cookingDirection === "Soft" &&
    parameters.size === "Large"
  ) {
    return 8;
  } else if (
    parameters.cookingDirection === "Medium" &&
    parameters.size === "Small"
  ) {
    return 8;
  } else if (
    parameters.cookingDirection === "Medium" &&
    parameters.size === "Medium"
  ) {
    return 9;
  } else if (
    parameters.cookingDirection === "Medium" &&
    parameters.size === "Large"
  ) {
    return 10;
  } else if (
    parameters.cookingDirection === "Hard" &&
    parameters.size === "Small"
  ) {
    return 10;
  } else if (
    parameters.cookingDirection === "Hard" &&
    parameters.size === "Medium"
  ) {
    return 11;
  } else if (
    parameters.cookingDirection === "Hard" &&
    parameters.size === "Large"
  ) {
    return 12;
  }
}

function resetTimer(minutes, buttonStart, buttonPause, buttonContinue, cookingEgg, cookingDone) {
  clearInterval(countdownInterval);

  document.querySelector(".numeric-timer").innerHTML = `
    <span class="minutes">${
      minutes < 10 ? "0" + minutes : minutes
    }</span>:<span class="seconds">00</span>
  `;

  audio.pause();
  buttonPause.classList.add("hidden");
  buttonContinue.classList.add("hidden");
  buttonStart.classList.remove("hidden");
  buttonStart.classList.add("shown");
  buttonPause.classList.remove("inactive");

  cookingEgg.classList.remove("bounce");
  cookingEgg.classList.add("shown");
  cookingEgg.classList.remove("hidden");
  cookingDone.classList.remove("shown");
  cookingDone.classList.add("hidden");

  renderVisualTimer(minutes);
}
