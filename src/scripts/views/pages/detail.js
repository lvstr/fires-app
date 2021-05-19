import RestaurantAPI from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `<div id="detailRestaurant"></div>
        <div id="likeButtonContainer"></div>`;
    },

    async afterRender() {
        const restaurantContainer = document.querySelector('#detailRestaurant');
        restaurantContainer.classList.add('loader');
        const detailInfo = await this.restaurantApi();
        restaurantContainer.classList.remove('loader');
        this.renderBreadcrumb(restaurantContainer, detailInfo);
        //console.log(detailInfo.restaurant);
        const detailRestaurant = document.createElement('restaurant-detail');
        detailRestaurant.restaurant = detailInfo.restaurant;
        restaurantContainer.appendChild(detailRestaurant);
        LikeButtonInitiator.init({
            restaurant: {
                id: detailInfo.restaurant.id,
                name: detailInfo.restaurant.name,
                pictureId: detailInfo.restaurant.pictureId,
                description: detailInfo.restaurant.description,
                address: detailInfo.restaurant.address,
                city: detailInfo.restaurant.city,
                rating: detailInfo.restaurant.rating,
                categories: detailInfo.restaurant.categories,
                menus: detailInfo.restaurant.menus,
                customerReviews: detailInfo.restaurant.customerReviews,
            },
        });
    },

    renderBreadcrumb(content, detailData) {
        const breadcrumb = document.createElement('breadcrumb-item');
        breadcrumb.dataset.page = 'Detail';
        breadcrumb.restaurant = detailData.restaurant;
        content.appendChild(breadcrumb);
    },

    async restaurantApi() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        return await RestaurantAPI.detailRestaurant(url.id);
    },
};

export default Detail;
