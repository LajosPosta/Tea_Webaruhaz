/* Nav bar aktíválása*/

const hamburgerBtn = document.querySelector(".hamburger-button");
const navListContainer = document.querySelector(".nav-list-container");
const closeBtn = document.querySelector(".close-icon")
const overlay = document.querySelector(".overlay")


hamburgerBtn.addEventListener("click", menuOpen);
closeBtn.addEventListener("click", menuOpen);
overlay.addEventListener("click", menuOpen)

function menuOpen() {
    navListContainer.classList.toggle("active");
    /*overlay.classList.toggle("activee");*/
   
}
