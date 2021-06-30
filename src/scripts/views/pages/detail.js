/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
import RestaurantAPI from "../../data/restaurant-source";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import RestauraFavoriteRestaurantIdb from "../../data/favorite-restaurants-idb";

const Detail = {
  async render() {
    return `<div id="detailRestaurant"></div>
        <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector("#detailRestaurant");
    const restaurantHeader = document.querySelector("hero-section");
    if (restaurantHeader) {
      restaurantHeader.remove();
    }

    this._renderSkeletonLoading(restaurantContainer);
  },

  _renderLikeButton(container, data) {
    this._renderBreadcrumb(container, data);
    const detailRestaurant = document.createElement("restaurant-detail");
    detailRestaurant.restaurant = data.restaurant;
    container.appendChild(detailRestaurant);
    LikeButtonInitiator.init({
      favoriteRestaurant: RestauraFavoriteRestaurantIdb,
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        pictureId: data.restaurant.pictureId,
        description: data.restaurant.description,
        address: data.restaurant.address,
        city: data.restaurant.city,
        rating: data.restaurant.rating,
        categories: data.restaurant.categories,
        menus: data.restaurant.menus,
        customerReviews: data.restaurant.customerReviews,
      },
    });
  },

  async _renderSkeletonLoading(container) {
    const skeletonDetail = document.createElement("skeleton-detail");
    container.appendChild(skeletonDetail);
    const API = await this.restaurantApi();
    container.innerHTML = "";
    this._renderLikeButton(container, API);
  },

  _renderBreadcrumb(content, data) {
    const breadcrumb = document.createElement("breadcrumb-item");
    breadcrumb.restaurant = data.restaurant;
    content.appendChild(breadcrumb);
  },

  async restaurantApi() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    return await RestaurantAPI.detailRestaurant(url.id);
  },
};

export default Detail;
