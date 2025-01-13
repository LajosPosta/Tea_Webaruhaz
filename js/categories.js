const productCategoriesContainer =document.querySelectorAll(".product-category");
const btnLeft = document.querySelectorAll(".carousel2_button-left");
const btnRight = document.querySelectorAll(".carousel2_button-right");

productCategoriesContainer.forEach((image, i) => {
    const containerWidth = image.getBoundingClientRect().width;

    btnRight[i].addEventListener("click", () => {
        image.scrollLeft += containerWidth;
    })
    btnLeft[i].addEventListener("click", () => {
        image.scrollLeft -= containerWidth;
    })
})

