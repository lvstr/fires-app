class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="footer">
        <div class="inner-footer">
            <div class="footer-items">
                <h1>FiRes</h1>
                <p>We provide the best restaurant for you!</p>
            </div>

            <div class="footer-items">
                <h4>Links</h4>
                <div class="border1"></div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#list">Restaurant List</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li>
                        <a
                            href="https://github.com/lvstr"
                            target="_blank"
                            rel="noopener"
                            >About Us</a
                        >
                    </li>
                </ul>
            </div>

            <div class="footer-items">
                <h4>Contact Us</h4>
                <div class="border1"></div>
                <ul>
                    <li>
                        <i
                            class="fa fa-map-marker"
                            aria-hidden="true"
                        ></i
                        >Jl Temanggung Silam, RT 002/RW 004 No
                        29, Beriwit, Murung, Murung Raya,
                        Kalimantan Tengah, 73911
                    </li>
                    <li>
                        <i
                            class="fa fa-phone"
                            aria-hidden="true"
                        ></i>
                        <a
                            href="tel:+6285820668826"
                            title="Nomor Telepon"
                            >+6285820668826</a
                        >
                    </li>
                    <li>
                        <i
                            class="fa fa-envelope"
                            aria-hidden="true"
                        ></i>
                        <a
                            href="mailto:serankucing@gmail.com"
                            title="Email"
                            >serankucing@gmail.com</a
                        >
                    </li>
                </ul>

                <div class="social-media">
                    <a
                        href="https://instagram.com/lvstr_"
                        title="Instagram Account"
                        target="_blank"
                        rel="noopener"
                        ><i class="fa fa-instagram"></i
                    ></a>
                </div>
            </div>
        </div>

        <!--   Footer Bottom start  -->
        <div class="footer-bottom">
            Copyright &copy; FiRes 2021.
        </div>
    </div>`;
    }
}

customElements.define('footer-section', Footer);
