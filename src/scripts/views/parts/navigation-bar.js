class NavigationBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div class="nav-wrapper">
        <nav class="navbar">
            <div class="brand">
                <img
                    src="./images/logo/fires.png"
                    alt="FiRes Logo"
                    width="30px"
                    height="44px"
                />
                <h3>FiRes</h3>
            </div>

            <button
                class="menu-toggle"
                id="mobile-menu"
                aria-label="Navigation Button"
            >
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul class="nav">
                <li class="nav-item">
                    <a href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/favorite">Favorite</a>
                </li>
                <li class="nav-item">
                    <a
                        href="https://github.com/lvstr"
                        rel="noopener"
                        target="_blank"
                        >About Us</a
                    >
                </li>
            </ul>
        </nav>
    </div>`;
    }
}

customElements.define('navigation-bar', NavigationBar);
