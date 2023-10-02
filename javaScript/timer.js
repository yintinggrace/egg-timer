"use strict";

function renderTimer(parameters) {
  console.log(parameters);
  let navigationHeader = document.querySelector(".navigationHeader");
  navigationHeader.innerHTML = `
    <img src="./images/arrow.png" alt="arrow" class="arrow">
  `;
}
