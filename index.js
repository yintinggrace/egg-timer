"use strict";

const headerDom = document.querySelector("header");
const mainDom = document.querySelector(".main-frontpage");

mainDom.innerHTML = `
  <div class="logo">
    <img src="./images/egg-logo.png" alt="logo">
    <h2>Eggcellent Timer</h1>
  </div>
`;

const animElement = document.querySelector(".logo");

animElement.addEventListener("animationend", renderStep1);
