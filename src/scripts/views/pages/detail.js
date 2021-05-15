import RestaurantAPI from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
    async render() {
        return `
    <div class="content">
    <h2 id="list">Detail Restoran</h2>
    <div id="detailRestaurant">

    </div>
  </div>`;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantAPI.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#detailRestaurant');
        console.log(restaurant);
    },
};

export default Detail;
