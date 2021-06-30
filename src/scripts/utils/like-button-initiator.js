/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import Swal from 'sweetalert2';

const LikeButtonInitiator = {
  async init({ restaurant, favoriteRestaurant }) {
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    (await this._isRestaurantExist(id)) ? this._liked() : this._like();
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _like() {
    const likeButton = document.querySelector('favorite-button');
    likeButton.setAttribute('liked', 'false');
    likeButton.addEventListener('click', async () => {
      await Swal.fire({
        icon: 'question',
        title: 'Add to Favorite?',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        confirmButtonColor: '#5165f4',
      }).then((result) => {
        if (result.isConfirmed) {
          this._favoriteRestaurant.putRestaurant(this._restaurant).then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Added to Favorite',
              confirmButtonText: 'Ok',
            });
          });
        }
        this._renderButton();
      });
    });
  },

  _liked() {
    const likeButton = document.querySelector('favorite-button');
    likeButton.setAttribute('liked', 'true');
    likeButton.addEventListener('click', async () => {
      await Swal.fire({
        icon: 'question',
        title: 'Delete from Favorite?',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        showCancelButton: true,
        confirmButtonColor: '#5165f4',
      }).then((result) => {
        if (result.isConfirmed) {
          this._favoriteRestaurant
            .deleteRestaurant(this._restaurant.id)
            .then(() => {
              Swal.fire({
                icon: 'success',
                title: 'Deleted from Favorite',
                confirmButtonText: 'Ok',
              });
            });
        }
        this._renderButton();
      });
    });
  },
};

export default LikeButtonInitiator;
