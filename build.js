(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import { without } from "lodash";
// var _ = require('lodash')

// const arr = [1,2,3,4,5];
// console.log("Answer: ", _.without(arr, 3));
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradient = document.querySelector("#gradient");

const changeBackground = () => {
   gradient.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

   css.textContent = `${gradient.style.background};`;
};

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
},{}]},{},[1]);
