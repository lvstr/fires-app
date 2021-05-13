import RestaurantAPI from '../../data/restaurantAPI-source';
import {
    createRestaurantItemTemplate,
    ratingTemplate,
} from '../templates/template-creator';

const Home = {
    async render() {
        return `
    <div class="content">
    <h2 id="list">Cari Restoran</h2>
    <div id="restoList" class="cards">

    </div>
  </div>`;
    },

    async afterRender() {
        const restaurants = await RestaurantAPI.restaurantsList();
        const restaurantsContainer = document.querySelector('#restoList');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML +=
                createRestaurantItemTemplate(restaurant);
            ratingTemplate(restaurant.id, restaurant.rating);
        });
    },
};

export default Home;
