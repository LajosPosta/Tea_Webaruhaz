const track2 = document.querySelector(".carousel2_track");
const slides2 = Array.from(track2.children);
const nextButton2 = document.querySelector(".carousel2_button-right");
const prevButton2 = document.querySelector(".carousel2_button-left");

//Dia szélessége
const slideWidth2 = slides2[0].getBoundingClientRect().width;

// Dia elrendezése
const setSlidePosition2 = (slide, index) => {
    slide.style.left = slideWidth2 * index + "px";
}
slides2.forEach(setSlidePosition2);

/***** Dia mozgatása *****/


//Dia mozgatása jobbra vagy balra  (a targetSide megkapja a nextSlide értékét)
const moveToSlide2 = (track2, currentSlide, targetSlide) => {
    track2.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

// prevButton balra mozgatom a diát
prevButton2.addEventListener("click", () => {
    const currentSlide = track2.querySelector(".current-slide");
    const nextSlide = currentSlide.previousElementSibling;
    
    // meghívom a moveToSlide függvényt melynek az alábbi változókat adom meg
    moveToSlide2(track2, currentSlide, nextSlide);
})


// nextButton jobra mozgatom a diát
nextButton2.addEventListener("click", () => {
    //az alábbiak értéke mindig váltotik
   const currentSlide = track2.querySelector(".current-slide");
   const nextSlide = currentSlide.nextElementSibling;

    // meghívom a moveToSlide függvényt melynek az alábbi változókat adom meg
    moveToSlide2(track2, currentSlide, nextSlide);
});



    


