"use strict";
// VARIABLES
let bodyEl = document.querySelector("body");
let closeBtn = document.querySelector(".close-icon");
let navBtn = document.querySelector(".nav-btn");
let navEl = document.querySelector(".navbar");
let navItems = document.querySelector(".nav-list");
let navLinks = document.querySelectorAll(".nav-link");
let projectLogo = document.querySelector(".nav-logo");
//FUNCTIONS
function operations() {
  closeBtn.classList.toggle("hidden");
  navBtn.classList.toggle("hidden");
  navEl.classList.toggle("nav-mobile");
  bodyEl.classList.toggle("overflow");
  projectLogo.classList.toggle("opacity");
  navItems.classList.toggle("mobile-nav-list");
}

// JENERAL OPERATION
navBtn.addEventListener("click", operations);
closeBtn.addEventListener("click", operations);
navLinks.forEach((element) => {
  element.addEventListener("click", function () {
    bodyEl.classList.remove("overflow");
    navEl.classList.remove("nav-mobile");
    navItems.classList.remove("mobile-nav-list");
    closeBtn.classList.add("hidden");
    navBtn.classList.remove("hidden");
    projectLogo.classList.remove("opacity");
  });
});
