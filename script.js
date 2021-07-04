const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradient = document.querySelector("#gradient");

const changeBackground = () => {
   gradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

   css.textContent = `${gradient.style.background} ;`;
};

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);