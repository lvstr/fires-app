class Favorite extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['liked'];
    }

    attributeChangedCallback() {
        this.render();
    }

    _liked() {
        return this.getAttribute('liked');
    }

    render() {
        this.innerHTML = `
        <button aria-label="Add this Restaurant to Favorite" id="likeButton" class="like">
        <i class="fa fa-heart${
            this._liked() == 'false' ? '-o' : ''
        }" aria-hidden="true"></i>
     </button>
        `;
    }
}

customElements.define('favorite-button', Favorite);
