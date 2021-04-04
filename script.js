var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.querySelector("#gradient");

function changeBackground(){
   gradient.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

   css.textContent = gradient.style.background + ";";
};

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);