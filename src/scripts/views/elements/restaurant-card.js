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
            <div id='${this._restaurant.id}'>
            <rating-star data-star=${this._restaurant.rating}></rating-star>
              </div>
          </div>
          <div class="card_image">
            <img
              src="${
                  CONFIG.BASE_IMAGE_URL + this._restaurant.pictureId
              }" alt="${this._restaurant.name}" width="100%" height="230px"
            />
            <div class="overlay">
              <a href="/#/detail/${
                  this._restaurant.id
              }" class="icon" title="See More">
                <i class="fa fa-eye"></i>
              </a>
            </div>
          </div>
          <div class="card_content">
            <h3 class="card_title">${this._restaurant.name}</h3>
            <h4 class="city">${this._restaurant.city}</h4>
            <p class="card_text">
              ${this._restaurant.description.split(' ', 20).join(' ')}
              <span id="dots">... <a href="/#/detail/${
                  this._restaurant.id
              }">Read More</a></span>
            </p>
          </div>
        </div>
        `;
    }
}

customElements.define('restaurant-item', RestaurantCard);
