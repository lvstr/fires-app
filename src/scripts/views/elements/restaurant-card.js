/* eslint-disable no-underscore-dangle */
import CONFIG from '../../globals/config';

class RestaurantCard extends HTMLElement {
  /**
     * @param {any} restaurant
     */
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="card">
        <div class="card_tag">
        <rating-star data-star="${this._restaurant.rating}"></rating-star>
        </div>
        <figure class="card_image">
        <img src="${
  `${CONFIG.BASE_IMAGE_URL}small/${this._restaurant.pictureId}`
}" alt="${this._restaurant.name}" width="100%" height="230px"/>
        <div class="overlay">
        <a
            href="/#/detail/${this._restaurant.id}"
            class="icon"
            title="See More"
        >
            <i class="fa fa-eye"></i>
        </a>
    </div>
          </figure>
          <div class="card_content">
            <a class="card_title" href="/#/detail/${this._restaurant.id}">${
  this._restaurant.name
}</a>
            <h3 class="city">${this._restaurant.city}</h3>
            <p class="card_text">${this._restaurant.description
    .split(' ', 20)
    .join(' ')}...</p>
          </div>
        </div>
        `;
  }
}

customElements.define('restaurant-item', RestaurantCard);
