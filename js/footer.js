const createFooter = () => {
    let footer = document.querySelector('.footer');

    footer.innerHTML = `
        <section class="contact">
                <div class="contact-box1">
                    <h2>Kapcsolat</h2>
                    <p>Kérdései esetén kérjük keressen minket az alábbi elérhetőségeken!</p>
                </div>
                <div class="contact-box2">
                    <img class="shopping-cart" src="./assets/icons/shopping-cart2.png" alt="bevásárló kosár ikon">
                    <p>Rendeléssel kapcsolatban</p>
                </div>
                <div class="contact-box3">
                    <img class="mail" src="./assets/icons/mail.png" alt="boríték ikon">
                    <a href="#">rendeles@jozseftea.hu</a>
                </div>
                <div class="contact-box4">
                    <img class="phone" src=".//assets/icons/telephone.png" alt="telefon ikon">
                    <a href="">+3630 123 4567</a>
                    <p>Elérhetőség H-P: 8:00 - 16:00</p>
                </div>
            </section>
            <section class="contact2">
                <ul class="contact2_list">
                    <li><a href="">Gyakran ismételt kérdések</a></li>
                    <li><a href="">Impresszum</a></li>
                    <li><a href="">ÁSZF</a></li>
                    <li><a href="">Adatkezelési tájékoztató</a></li>
                </ul>
            </section>
            <p class="copyright">József Herbal Kft. 2025 &copy; - Minden jog fenntartva</p>
    `;
}

createFooter();