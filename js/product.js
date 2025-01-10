/***** Termék oldal *****/


//kiválasztom a product-slider osztályú elemet
const poductImageSlide = document.querySelector(".product-slider");
//kiválasztom az összes "Kamilla" osztályú képet
const productImages = document.querySelectorAll(".Kamilla");

//kezdeti értéket adok a kezdő képnek azaz a NULLADIK indexálású képpel kezdünk
let activeImageSlide = 0;

//mindegyik képre (forEach metódust) alkalmazom az alábbiakat,
// a nyílfüggvényben veszem az összes képet és veszem azok indexeit
productImages.forEach((image, i) => {
        // klikk eseményt rendelek minden képhez
        image.addEventListener("click", () => {
        // az aktív képről leveszem az active osztályt így az már nem aktív  
        productImages[activeImageSlide].classList.remove('active');
        // hozzáadam az active osztályt az újonnan kiválasztott képhez
        image.classList.add("active");
        // a product-slider osztályú html tag forrása = az aaktuális kép forrásával 
        poductImageSlide.src = image.src;
        // az activeImageSlide változó felveszi az aktuális kép indexét.
        activeImageSlide = i;

    })
})

/***** Kiszerelés gombok  *****/

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

