/* eslint-disable no-unused-expressions */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as TestFactories from './helpers/testFactories';

const addLikeButton = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  document
    .getElementById('likeButtonContainer')
    .appendChild(document.createElement('favorite-button'));
};

describe('Liking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButton();
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[liked=false]')).toBeTruthy;
  });
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[liked=true]')).toBeFalsy;
  });
  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('favorite-button').dispatchEvent(new Event('click'));
    await document.querySelector('.swal2-confirm').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getRestaurant(1)).toEqual({ id: 1 });
  });
  it('should not add a Restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('favorite-button').dispatchEvent(new Event('click'));
    await document.querySelector('.swal2-confirm').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
  });

  it('should not add a restaurant when it has no id', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    await TestFactories.createLikeButtonPresenterWithRestaurant({});
    document.querySelector('favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked movie is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
