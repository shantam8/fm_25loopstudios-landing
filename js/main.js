let btnHamburger = document.querySelector("#btnHamburger");
let header = document.querySelector("header");
let body = document.querySelector("body");

function toggleMobileMenu() {
  if (header.classList.contains("isOpen")) {
    console.log("closing");
    header.classList.remove("isOpen");
    body.classList.remove("overflowHidden");
  } else {
    console.log("opening");
    header.classList.add("isOpen");
    body.classList.add("overflowHidden");
  }
}

function init() {
  console.log("Hi");
  btnHamburger.addEventListener("click", toggleMobileMenu);
}

window.onload = init();
