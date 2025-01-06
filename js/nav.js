const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    <label class="overlay" for="nav-checkbox"></label>
            <input type="checkbox" id="nav-checkbox">
            <label for="nav-checkbox" class="hamburger-button">
                <span class="hamburger-line top-line"></span>
                <span class="hamburger-line middle-line"></span>
                <span class="hamburger-line bottom-line"></span>
            </label>

            <div class="logo-container">
                <a href="#header">
                    <h1>Tea Webáruház</h1>
                    <img  src="./assets/icons/herbal-tea.png" alt="logo">
                </a>
            </div>
            
            <!-- SLIDE BAR  begins-->
            <section class="nav-list-container">
                <div class="nav-list-container_close-icon">
                    <label class="close" for="nav-checkbox">
                        <img 
                            class="close-icon" 
                            src="./assets/icons/close.png"
                            alt="Navigációs menü bezárása">
                    </label>
                </div>
                    <div class="nav-list-container_slide-bar">
                        <div class="products-maincontainer">
                            <div>
                                <a class="nav-item nav-item_products" href="#">
                                    Termékek
                                </a>
                                <img class="products-arrow" src="./assets/icons/arrow.png" alt="termékek legördülő menüsora">
                            </div>
                            <ul class="products">
                                <li><a class="product" href="#">Kamilla tea</a></li>
                                <li><a class="product" href="#">Csalán tea</a></li>
                                <li><a class="product" href="#">Menta tea</a></li>
                                <li><a class="product" href="#">Bodza tea</a></li>
                                <li><a class="product" href="#">Csipkebogyó tea</a></li>
                                <li><a class="product" href="#">Orbáncfű tea</a></li>
                                <li><a class="product" href="#">Kisvirágű fűzike tea</a></li>
                                <li><a class="product" href="#">Cickavirág tea</a></li>
                                <li><a class="product" href="#">Tyúkhúr tea</a></li>
                                <li><a class="product" href="#">Lándzsás útifű tea</a></li>
                            </ul>
                        </div>
                        <ul class="al-ul">
                            <li><a class="nav-item" href="#">Rólunk</a></li>
                            <li><a class="nav-item" href="#">Rólunk mondák</a></li>
                            <li><a class="nav-item" href="#">Üzleteink</a></li>
                            <li><a class="nav-item" href="#">Kapcsolat</a></li>
                        </ul>
                    </div>    
            </section>
            <!--SIDE BAR end-->

            <div class="icons-container">
                <a href="#">
                    <img src="./assets/icons/loupe.png" alt="Keresés">
                </a>
                <a href="#">
                    <img src="./assets/icons/shopping-cart1.png" alt="Kosár">
                </a>
                <a href="#">
                    <img src="./assets/icons/account.png" alt="Belépés">
                </a>
            </div>
        <!--SEARCH section-->
        <section class="search">
            <input type="text" class="search-box" placeholder="Mit jár a fejedben?">
            <button class="search-btn">Keresés</button>
        </section>
        <!--SEARCH end section-->
    `;
}

createNav();



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


