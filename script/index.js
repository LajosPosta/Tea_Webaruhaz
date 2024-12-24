/* Nav bar aktíválása*/

const hamburgerBtn = document.querySelector(".hamburger-button");
const navListContainer = document.querySelector(".nav-list-container");
const closeBtn = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const navItemContainer = document.querySelector(".nav-item_products");
const arrow = document.querySelector(".products-arrow");
const products = document.querySelector(".products");


hamburgerBtn.addEventListener("click", menuOpen);
closeBtn.addEventListener("click", menuOpen);
overlay.addEventListener("click", menuOpen);
navItemContainer.addEventListener("click", productsOpen);
arrow.addEventListener("click", productsOpen);

/*hamburgerBtn.addEventListener("click", productsClose);
closeBtn.addEventListener("click", productsClose);
overlay.addEventListener("click", productsClose);
navItemContainer.addEventListener("click", productsClose);
arrow.addEventListener("click", productsClose);*/

function menuOpen() {
    navListContainer.classList.toggle("active");
   
}

function productsOpen() {
    navItemContainer.classList.toggle("nav-item_products-active")
    arrow.classList.toggle("products-arrow_is-active")
    products.classList.toggle("products-is-active")
}


