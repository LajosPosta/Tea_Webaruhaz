/* Nav BAR*/

const hamburgerBtn = document.querySelector(".hamburger-button");
const navListContainer = document.querySelector(".nav-list-container");
const closeBtn = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");
const navItemContainer = document.querySelector(".nav-item_products");
const arrow = document.querySelector(".products-arrow");
const products = document.querySelector(".products");
const carousel = document.querySelector(".carousel")


hamburgerBtn.addEventListener("click", menuOpen);
closeBtn.addEventListener("click", menuOpen);
overlay.addEventListener("click", menuOpen);
navItemContainer.addEventListener("click", productsOpen);
arrow.addEventListener("click", productsOpen);


function menuOpen() {
    navListContainer.classList.toggle("nav-list-container-active");   
}

function productsOpen() {
    navItemContainer.classList.toggle("nav-item_products-active")
    arrow.classList.toggle("products-arrow_is-active")
    products.classList.toggle("products-is-active")
}

/***** CAROUSEL *****/

const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const rightButton = document.querySelector(".carousel_button-right");
const leftButton = document.querySelector(".carousel_button-left");
const indicatorsContainer = document.querySelector(".carousel_indicator-container");
const indicators = Array.from(indicatorsContainer.children)

// a viewport szélességéhez rendezi a dia szélességét
const slideWidth = slides[0].getBoundingClientRect().width; 

// console.log(slideWidth);

/* diák egymáshoz helyezése */
// egy diának beállítjuk a pozícióját a setSlidePosition fügvénnyel
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
//majd az összes diára futtajuk (meghívjuk) a setSlidePosition függvényt
slides.forEach(setSlidePosition);

// Amikor balra klikkelek balra lévő diára váltok


// Amikor jobbra klikkelek jobb lévő diára váltok
rightButton.addEventListener("click", () => {
const currentSlide = track.querySelector(".current-slide");
const nextSlide = currentSlide.nextElementSibling;
const amountToMove = nextSlide.style.left;

console.log(amountToMove)
})

// A mikor a Nav indcatorra klikkelek akkor az adott diára váltok






