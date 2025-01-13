const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const rightButton = document.querySelector(".carousel1_button-right");
const leftButton = document.querySelector(".carousel1_button-left");
const indicatorsContainer = document.querySelector(".carousel_indicator-container");
const indicators = Array.from(indicatorsContainer.children)

// a viewport szélességéhez rendezi a dia szélességét
const slideWidth = slides[0].getBoundingClientRect().width; 


/* diák egymáshoz helyezése */
// egy diának beállítjuk a pozícióját a setSlidePosition fügvénnyel
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
//majd az összes diára futtajuk (meghívjuk) a setSlidePosition függvényt
slides.forEach(setSlidePosition);

//mindig amikor diát váltunk akkor az aktuálsi dia elveszíti az aktuális dia osztályt (current-slide) és egy másik kapja meg az currnet-slide osztályt
// így nyomon tudjuk követni hogy merre megyünk és mennyit kell mozognunk
// mindhárom változónak kell hogy legyen argumentuma
const moveToSlide = (track, currentSlide, celSlide) => {
    track.style.transform = "translateX(-" + celSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    celSlide.classList.add("current-slide");
}

//Gombok mozgása
const updateIndicators = (currentIndicator, celIndicator) => {
    currentIndicator.classList.remove("current-slide");
    celIndicator.classList.add("current-slide");
}

// A nyilak eltünjenek vagy mutatkozzanank attól függően, hogy hol vagyunk a diasoron
const hideShowArrows = (slides, leftButton, rightButton, celIndex) => {
    if (celIndex === 0) {
        leftButton.classList.add("is-hidden");
        rightButton.classList.remove("is-hidden");
    } else if (celIndex === slides.length - 1) {
        leftButton.classList.remove("is-hidden");
        rightButton.classList.add("is-hidden"); 
    } else {
        leftButton.classList.remove("is-hidden");
        rightButton.classList.remove("is-hidden");
    }
}

// Amikor balra klikkelek balra lévő diára váltok
leftButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const previousSlide = currentSlide.previousElementSibling;
    const currentIndicator = indicatorsContainer.querySelector(".current-slide");
    const previousIndicator = currentIndicator.previousElementSibling;
    const previousIndex = slides.findIndex(slide => slide ===  previousSlide);

    moveToSlide(track, currentSlide, previousSlide);
    updateIndicators(currentIndicator, previousIndicator);
    hideShowArrows(slides, leftButton, rightButton, previousIndex);
})


// Amikor jobbra klikkelek jobb lévő diára váltok
rightButton.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndicator = indicatorsContainer.querySelector(".current-slide");
    const celIndicator = currentIndicator.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateIndicators(currentIndicator, celIndicator);
    hideShowArrows(slides, leftButton, rightButton, nextIndex);
})

// A mikor a Nav indcatorra klikkelek akkor az adott diára váltok

indicatorsContainer.addEventListener("click", e => {
    //Melyik indikátorra lett klikkelve?
    const celIndicator = e.target.closest("button");

    if (!celIndicator) return;
    
    const currentSlide = track.querySelector(".current-slide")
    const currentIndicator = indicatorsContainer.querySelector(".current-slide");
    const celIndex = indicators.findIndex(indicator => indicator === celIndicator);
    const celSlide = slides[celIndex];
    
    moveToSlide(track, currentSlide, celSlide);
    updateIndicators(currentIndicator, celIndicator);
    hideShowArrows(slides, leftButton, rightButton, celIndex);
})








