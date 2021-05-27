/* eslint-disable no-unused-expressions */
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';

const Favorite = {
  async render() {
    return `
        <hero-section></hero-section>
             <h2  id="list"></h2>
             <div id="restoList" class="cards"></div>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restoList');
    const restaurantTitle = document.querySelector('#list');
    const restaurantCards = document.createElement('restaurant-item');
    restaurantsContainer.classList.add('loader');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurants.length === 0 ? (restaurantTitle.textContent = "There's no favorite Restaurant") : (restaurantTitle.textContent = 'Favorite Restaurants List');
    restaurantsContainer.classList.remove('loader');
    restaurants.forEach((restaurant) => {
      restaurantCards.restaurant = restaurant;
      restaurantsContainer.appendChild(restaurantCards.cloneNode(true));
    });
  },
};

export default Favorite;
