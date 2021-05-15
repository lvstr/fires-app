class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="hero-content">
            <h1 class="hero-title">FiRes - Find Restaurant</h1>
      
            <h2 class="hero-subtitle">
            We provide the best restaurant for you!
            </h2>
      
            <div class="button-wrapper">
                <a href="#list" class="hero-button">
                Find Restaurant &raquo;
                </a>
            </div>
        </div>`;
    }
}

customElements.define('hero-section', Hero);
