import FavoriteRestaurantIdb from '../data/favorite-restaurants-idb';
const LikeButtonInitiator = {
    async init({ restaurant }) {
        this._restaurant = restaurant;
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._liked();
        } else {
            this._like();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
        return !!restaurant;
    },

    _like() {
        const likeButton = document.querySelector('favorite-button');
        likeButton.setAttribute('liked', 'false');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _liked() {
        const likeButton = document.querySelector('favorite-button');
        likeButton.setAttribute('liked', 'true');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButtonInitiator;
