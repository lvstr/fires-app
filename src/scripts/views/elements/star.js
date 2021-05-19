class Star extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    _calculateStar() {
        const starTotal = 5;
        const starPercentage = (this.star / starTotal) * 100;
        return Math.round(starPercentage / 10) * 10;
    }

    get star() {
        return this.dataset.star;
    }

    render() {
        this.innerHTML = `
            <div class="stars-outer">
                <div class="stars-inner" style="width: ${this._calculateStar()}%"></div>
                </div>
                <div class="rate"><span>${this.star}</span></div>
        `;
    }
}

customElements.define('rating-star', Star);
