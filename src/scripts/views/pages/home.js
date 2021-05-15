import RestaurantAPI from '../../data/restaurant-source';

const Home = {
    async render() {
        return `
             <h2 id="list">Restaurant List</h2>
             <div id="restoList" class="cards"></div>
    `;
    },

    async afterRender() {
        const restaurantsContainer = document.querySelector('#restoList');
        const restaurantCards = document.createElement('restaurant-item');
        restaurantsContainer.classList.add('loader');
        const restaurants = await RestaurantAPI.restaurantsList();
        restaurantsContainer.classList.remove('loader');
        restaurants.forEach((restaurant) => {
            restaurantCards.restaurant = restaurant;
            restaurantsContainer.appendChild(restaurantCards.cloneNode(true));
        });
    },
};

export default Home;
