"use strict";

const headerDom = document.querySelector("header");
const mainDom = document.querySelector(".main-frontpage");

mainDom.innerHTML = `
  <div class="logo-vertical">
    <img src="./images/egg-logo.png" alt="logo-vertical">
    <h2>Eggcellent Timer</h1>
  </div>
`;

const animElement = document.querySelector(".logo-vertical");

animElement.addEventListener("animationend", () =>
  renderStageOne(headerDom, mainDom)
);
