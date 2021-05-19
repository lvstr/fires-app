import FavoriteRestaurantIdb from '../data/favorite-restaurants-idb';
const LikeButtonInitiator = {
    async init({ restaurant }) {
        this._restaurant = restaurant;
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        const likeButton = document.querySelector('favorite-button');
        likeButton.setAttribute('liked', 'false');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        const likeButton = document.querySelector('favorite-button');
        likeButton.setAttribute('liked', 'true');
        likeButton.addEventListener('click', async () => {
            await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButtonInitiator;
