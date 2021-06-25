import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';

describe('Liking A Restaurant', () => {
  it('should show the like button when the restaurant has not been liked before', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    const likeContainer = document.getElementById('likeButtonContainer');
    likeContainer.appendChild(document.createElement('favorite-button'));
    await LikeButtonInitiator.init({
      restaurant: {
        id: 1,
      },
    });
    const likeButton = document.querySelector('favorite-button');
    expect(likeButton.getAttribute('liked'))
      .toBeTruthy();
  });
  it('should be able to like the restaurant', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    const likeContainer = document.getElementById('likeButtonContainer');
    likeContainer.appendChild(document.createElement('favorite-button'));
    await LikeButtonInitiator.init({
      restaurant: {
        id: 1,
      },
    });
    const likeButton = document.querySelector('favorite-button');
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    likeButton.dispatchEvent(new Event('click'));
    document.querySelector('.swal2-confirm').dispatchEvent(new Event('click'));
    expect(restaurant).toEqual({ id: 1 });
  });
  it('should not add a Restaurant again when its already liked', async () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    const likeContainer = document.getElementById('likeButtonContainer');
    likeContainer.appendChild(document.createElement('favorite-button'));
    await LikeButtonInitiator.init({
      restaurant: {
        id: 1,
      },
    });
    const likeButton = document.querySelector('favorite-button');
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    likeButton.dispatchEvent(new Event('click'));
    document.querySelector('.swal2-confirm').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
});
