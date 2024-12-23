/* Nav bar aktíválása*/

const hamburgerBtn = document.querySelector(".hamburger-button");
const navListContainer = document.querySelector(".nav-list-container");
const closeBtn = document.querySelector(".close-icon")
const blacklay = document.querySelector(".mobileUnderlay")

hamburgerBtn.addEventListener("click", menuOpen);
closeBtn.addEventListener("click", menuOpen);

function menuOpen() {
    navListContainer.classList.toggle("active");
    /*underLay();*/
    
}

/*function underLay() {
    blacklay.classList.toggle("abc");
}*/