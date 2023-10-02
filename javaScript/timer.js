"use strict";

function renderTimer(parameters) {
  let navigationHeader = document.querySelector(".navigationHeader");
  navigationHeader.innerHTML = `
    <img src="./images/arrow.png" alt="arrow" class="arrow">
  `;

  let wrapper = document.querySelector(".wrapper");
  wrapper.innerHTML = `
    <div class="visual-timer"></div>
    <div class="numeric-timer">xxx</div>
    <div class="button-timer">
      <button class="button-start">Start</button>
      <button class="button-reset">Reset</button>
    </div>
  `;

  const numericTimer = document.querySelector(".numeric-timer");
  numericTimer.textContent = "00:00";
  updateNumericTimer(numericTimer, parameters);
}

function updateNumericTimer(numericTimer, parameters) {
  if (parameters.cookingDirection === "Soft" && parameters.size === "Small") {
    numericTimer.textContent = "06:00";
  } else if (parameters.cookingDirection === "Soft" && parameters.size === "Medium") {
    numericTimer.textContent = "07:00";
  } else if (parameters.cookingDirection === "Soft" && parameters.size === "Large") {
    numericTimer.textContent = "08:00";
  } else if (parameters.cookingDirection === "Medium" && parameters.size === "Small") {
    numericTimer.textContent = "08:00";
  } else if (parameters.cookingDirection === "Medium" && parameters.size === "Medium") {
    numericTimer.textContent = "09:00";
  } else if (parameters.cookingDirection === "Medium" && parameters.size === "Large") {
    numericTimer.textContent = "10:00";
  } else if (parameters.cookingDirection === "Hard" && parameters.size === "Small") {
    numericTimer.textContent = "10:00";
  } else if (parameters.cookingDirection === "Hard" && parameters.size === "Medium") {
    numericTimer.textContent = "11:00";
  } else if (parameters.cookingDirection === "Hard" && parameters.size === "Large") {
    numericTimer.textContent = "12:00";
  }
}
