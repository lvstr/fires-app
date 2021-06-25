/* eslint-disable no-plusplus */
import RestaurantAPI from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
             
             <h2  id="list"></h2>
             <div id="restoList" class="cards"></div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restoList');
    const restaurantTitle = document.querySelector('#list');
    const restaurantCards = document.createElement('restaurant-item');
    const skeletonCard = document.createElement('skeleton-card');
    restaurantTitle.textContent = 'Explore Restaurant';
    for (let i = 0; i < 20; i++) {
      restaurantsContainer.appendChild(skeletonCard.cloneNode(true));
    }
    try {
      const restaurants = await RestaurantAPI.restaurantsList();
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantCards.restaurant = restaurant;
        restaurantsContainer.appendChild(
          restaurantCards.cloneNode(true),
        );
      });
    } catch (error) {
      restaurantsContainer.innerHTML = '';
      restaurantTitle.textContent = "There's error";
    }
  },
};

export default Home;
