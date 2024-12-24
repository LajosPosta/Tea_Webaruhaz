/* Nav bar aktíválása*/

const hamburgerBtn = document.querySelector(".hamburger-button");
const navListContainer = document.querySelector(".nav-list-container");
const closeBtn = document.querySelector(".close-icon")
const overlay = document.querySelector(".overlay")
const products = document.querySelector(".nav-item-products")

hamburgerBtn.addEventListener("click", menuOpen);
closeBtn.addEventListener("click", menuOpen);
overlay.addEventListener("click", menuOpen);
products.addEventListener("click", productsOpen)

function menuOpen() {
    navListContainer.classList.toggle("active");
   
}

function productsOpen() {
    products.classList.toggle("products-active");
}