//kiválasztom a slide elemet
const poductImageSlide = document.querySelector(".product-slider");
//kiválasztom az összes képet product-images-container-ben
const productImages = document.querySelectorAll(".product-images-container img");

//kezdeti értéket adok a kezdő képnek azaz a NULLADIK indexálású képpel kezdünk
let activeImageSlide = 0;

//mindegyik képre (forEach) alkalmazom az alábbiakat,
// a nyílfüggvényben veszem az összes képet és veszem azok indexeit
productImages.forEach((item, i) => {
        // klikk eseményt rendelek minden képhez
        item.addEventListener("click", () => {
        // az aktív képről leveszem az active osztályt így az már nem aktív  
        productImages[activeImageSlide].classList.remove('active');
        // hozzáadam az active osztályt az újonnan kiválasztott képhez
        item.classList.add("active");
        // ezzel egyidejűleg megváltozik a product-slide osztályú html elem háttérképe is
        poductImageSlide.style.backgroundImage = `url('${item.src}')`;
        // az activeImageSlide változó felveszi az aktív kép indexét.
        activeImageSlide = i;

    })
})

// kiszerelés gomboknak funkciót adunk

const weightBtn = document.querySelectorAll(".weight-btn");
// az aktuálisan kiválasztott gomb indexe
let checkedBtn = 0;

weightBtn.forEach((item, i) => {
    item.addEventListener("click", () => {
        weightBtn[checkedBtn].classList.remove("check");
        item.classList.add("check");
        checkedBtn = i;
    })
})

