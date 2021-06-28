import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
import FavoriteRestaurantIdb from " ../../../src/scripts/data/favorite-restaurants-idb";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
