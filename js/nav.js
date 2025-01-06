/*const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    
    `;

}

createNav();*/



const hamburgerBtn = document.querySelector(".hamburger-button");
const navListContainer = document.querySelector(".nav-list-container");
const closeBtn = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const navItemContainer = document.querySelector(".nav-item_products");
const arrow = document.querySelector(".products-arrow");
const products = document.querySelector(".products");
const carousel = document.querySelector(".carousel")



hamburgerBtn.addEventListener("click", menuOpenClose);
closeBtn.addEventListener("click", menuOpenClose);
overlay.addEventListener("click", menuOpenClose);
navItemContainer.addEventListener("click", productsOpenClose);
arrow.addEventListener("click", productsOpenClose);


function menuOpenClose() {
    navListContainer.classList.toggle("nav-list-container-active");
    overlay.classList.toggle("overlay-active");
       
}


function productsOpenClose() {
    navItemContainer.classList.toggle("nav-item_products-active");
    arrow.classList.toggle("products-arrow-active");
    products.classList.toggle("products-is-active");
}


