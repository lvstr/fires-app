import RestaurantAPI from '../../data/restaurant-source';
import CONFIG from '../../globals/config';

const Home = {
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
        try {
            const restaurants = await RestaurantAPI.restaurantsList();
            restaurantsContainer.classList.remove('loader');
            restaurantTitle.textContent = 'Explore Restaurant';
            restaurants.forEach((restaurant) => {
                restaurantCards.restaurant = restaurant;
                restaurantsContainer.appendChild(
                    restaurantCards.cloneNode(true)
                );
            });
        } catch (error) {
            restaurantTitle.textContent = "There's error";
        }
    },
};

export default Home;
