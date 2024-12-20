const hamburger = document.querySelector(".hamburger-button");
const navlistcontainer = document.querySelector(".nav-list-container");

hamburger.addEventListener("click", menuOpen);

function menuOpen() {
    navlistcontainer.classList.toggle("active");
}