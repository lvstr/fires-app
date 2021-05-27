/* eslint-disable no-underscore-dangle */
class Star extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  _calculateStar() {
    const starTotal = 5;
    const starPercentage = (this._star() / starTotal) * 100;
    return Math.round(starPercentage / 10) * 10;
  }

  _star() {
    return this.dataset.star;
  }

  render() {
    this.innerHTML = `
            <div class="stars-outer">
                <div class="stars-inner" style="width: ${this._calculateStar()}%"></div>
                </div>
                <div class="rate"><span>${this._star()}</span></div>
        `;
  }
}

customElements.define('rating-star', Star);
