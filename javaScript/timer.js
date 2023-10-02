"use strict";

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

  // Click start button
  let buttonStart = document.querySelector(".button-start");
  let buttonPause = document.querySelector(".button-pause");
  let buttonContinue = document.querySelector(".button-continue");

  buttonStart.addEventListener("click", () =>
    countDownNumericTimer(minutes, buttonStart, buttonPause, buttonContinue)
  );
}

function countDownNumericTimer(minutes, buttonStart, buttonPause, buttonContinue) {
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

  let totalSeconds = minutes * 60;

  function updateCountdown() {
    const minutesNew = Math.floor(totalSeconds / 60);
    const secondsNew = totalSeconds % 60;

    // Display the countdown
    document.querySelector(".minutes").innerText = minutesNew.toString().padStart(2, "0");
    document.querySelector(".seconds").innerText = secondsNew.toString().padStart(2, "0");

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
    } else {
      totalSeconds--;
    }
  }

  // Initial call to start the countdown
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);

  buttonPause.addEventListener("click", pauseTimer);
}

function pauseTimer() {
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
