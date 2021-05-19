class Breadcrumb extends HTMLElement {
    /**
     * @param {any} restaurant
     */
    set restaurant(restaurant) {
        this._restaurant = restaurant;
    }

    connectedCallback() {
        this.render();
    }

    get page() {
        return this.dataset.page;
    }

    render() {
        /*
        if data page in breadcrumb is 'Detail'

        */
        this.innerHTML = `
        <div class='breadcrumb-container'>
        <ol class="cd-breadcrumb" aria-label="breadcrumb">
        <li><a href="/">Home</a></li>
        ${
            this.page == 'Detail'
                ? `
        <li><a href="/#/detail/${this._restaurant.id}">Detail</a></li>
        <li class="current"><em>${
            this.page == 'Detail' ? `${this._restaurant.name}` : `${this.page} `
        }</em></li>
        `
                : `<li class="current"><a href="/#/${this.page}">${this.page}</a></li>`
        }
        
        </ol>
        </div>
        `;
    }
}

customElements.define('breadcrumb-item', Breadcrumb);
