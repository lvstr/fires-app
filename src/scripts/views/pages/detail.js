import RestaurantAPI from '../../data/restaurantAPI-source';
import {
    createRestaurantDetailTemplate,
    ratingTemplate,
} from '../templates/template-creator';

const Detail = {
    async render() {
        return `
    <div class="content">
    <h2 id="list">Detail Restoran</h2>
    <div id="detailRestaurant">

    </div>
  </div>`;
    },

    async afterRender() {},
};

export default Home;
