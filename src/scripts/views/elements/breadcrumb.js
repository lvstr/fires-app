class Breadcrumb extends HTMLElement {
    /**
     * @param {any} restaurant
     */
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class='breadcrumb-container'>
        <ol class="cd-breadcrumb" aria-label="breadcrumb">
        <li><a href="/">Home</a></li>
        <li><a href="/#/detail/${this._restaurant.id}">Detail</a></li>
        <li class="current"><em>${this._restaurant.name}</em></li> 
        </ol>
        </div>
        `;
    }
}

customElements.define('breadcrumb-item', Breadcrumb);
