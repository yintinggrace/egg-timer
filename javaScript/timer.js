"use strict";

function renderTimer(parameters) {
  console.log(parameters);
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
}
