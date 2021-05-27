class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="inner-footer">
            <div class="footer-items">
                <h1>Fologue</h1>
                <h2>We provide the best restaurant for you!</h2>
            </div>

            <div class="footer-items">
                <h3>Links</h3>
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
                <h3>Contact Us</h3>
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
            <p>Copyright &copy; Fologue 2021.</p>
        </div>`;
  }
}

customElements.define('footer-section', Footer);
