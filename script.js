"use strict";

// const properties = {
//   duration: 1000,
//   iterations: 1,
//   direction: "alternate",
//   easing: "ease-in-out",
// };

// const keyframes = [
//   { transform: "translate(0,41.25vw)" },
//   { transform: "translate(0,0)" },
// ];

// const ball = document.querySelector("#product .product_graphics");
// const animation = ball.animate(keyframes, properties);

// dark theme

let theme = localStorage.getItem("data-theme");
const checkbox = document.getElementById("switch");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("data-theme", "dark");
  console.log("I give you dark");
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.setItem("data-theme", "light");
  console.log("I give you light");
};

if (theme === "dark") {
  changeThemeToDark();
}

checkbox.addEventListener("change", () => {
  let theme = localStorage.getItem("data-theme");
  if (theme === "dark") {
    changeThemeToLight();
  } else {
    changeThemeToDark();
  }
});
