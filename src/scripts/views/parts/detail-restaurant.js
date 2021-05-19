import CONFIG from '../../globals/config';
import RestaurantAPI from '../../data/restaurant-source';
import Swal from 'sweetalert2';

class DetailRestaurant extends HTMLElement {
    /**
     * @param {any} restaurant
     */
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
        this._tabInitiator();
        this._newReview();
    }
    render() {
        this.innerHTML = `<div class="detail_container">
        
        <div class="detail_img">
        <div class="detail_tag">
                <rating-star
                    data-star="${this._restaurant.rating}"
                ></rating-star>
        </div>
        <favorite-button></favorite-button>
            <img
                src="${
                    CONFIG.BASE_IMAGE_URL +
                    'large/' +
                    this._restaurant.pictureId
                }"
                alt="${this._restaurant.name}"
            />
        </div>
        <div class="detail_content">
            <div class="info_wrapper">
                <h3>${this._restaurant.name}</h3>
                <h5>${this._restaurant.address}, ${this._restaurant.city}</h5>
                <div class="detail_category">${this._category()}</div>
    
                <div class="detail_description">
                    <h4>About the Place</h4>
                    <p>${this._restaurant.description}</p>
                </div>
            </div>
    
            <div class="tab_wrapper">
                <div class="button_wrapper">
                    <button
                        class="tab-button active"
                        style="border-top-left-radius: 10px"
                        data-id="menus"
                    >
                        Menus
                    </button>
                    <button
                        class="tab-button"
                        style="border-top-right-radius: 10px"
                        data-id="reviews"
                    >
                        Reviews
                    </button>
                </div>
                <div class="content_wrapper">
                    <div class="content active" id="menus">
                        <div class="menus_container">
                            <ul class="Foods">
                                <h4>Foods:</h4>
                                ${this._restaurant.menus.foods
                                    .map(
                                        (food) => `
                                <li>${food.name}</li>
                                `
                                    )
                                    .join(' ')}
                            </ul>
    
                            <ul class="Drinks">
                                <h4>Drinks:</h4>
                                ${this._restaurant.menus.drinks
                                    .map(
                                        (drink) => `
                                <li>${drink.name}</li>
                                `
                                    )
                                    .join(' ')}
                            </ul>
                        </div>
                    </div>
                           ${this._review()}
                </div>
            </div>
        </div>
    </div>
    
    
    
        `;
    }

    _newReview() {
        const form = this.querySelector('#review_form');
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const entries = formData.entries();
            const data = Object.fromEntries(entries);

            try {
                await RestaurantAPI.addNewReveiw(data);
                await Swal.fire({
                    icon: 'success',
                    title: 'Thank for Review',
                    text: 'Your review has been added!',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#5165f4',
                }).then((result) => {
                    if (result.isConfirmed) {
                        const reviewlist_wrapper = this.querySelector(
                            '.reviewlist_wrapper'
                        );
                        const reviewList =
                            document.createElement('review-comment');
                        reviewList.review = data;
                        reviewlist_wrapper.appendChild(reviewList);
                    }
                });
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'No Internet',
                    text: "You Don't have Internet Connection!",
                    confirmButtonText: 'Ok',
                });
            }
        });
    }

    _tabInitiator() {
        const tabs = this.querySelector('.tab_wrapper');
        const tabButton = this.querySelectorAll('.tab-button');
        const contents = this.querySelectorAll('.content');
        tabs.onclick = (e) => {
            const id = e.target.dataset.id;

            if (id) {
                tabButton.forEach((btn) => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');

                contents.forEach((content) => {
                    content.classList.remove('active');
                });
                const element = document.getElementById(id);
                element.classList.add('active');
            }
            const active = e.target.getAttribute('class');
            if (id === 'reviews' && active.includes('active')) {
                this._getReview();
            }
        };
    }

    _review() {
        const d = new Date();
        const dtf = new Intl.DateTimeFormat('id', {
            dateStyle: 'medium',
        }).format(d);
        return `
        <div class="content" id="reviews">
                      <div class="reviews_wrapper">
                      <ul class="reviewlist_wrapper">
                      </ul>
                      <hr />
                      </div>
                      <h3>Add New Review</h3>
                      <form id="review_form" method="post" action="/">
                      <div class="form_input">
                      <input type="hidden" name="id" value="${this._restaurant.id}" />
                      <input type="hidden" name="date" value="${dtf}" />
                      <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your name.." required>

    <label for="review">Review</label>
    <textarea type="text" id="review" name="review" placeholder="Your Review.." required></textarea>
                      </div>
                      <button id="formButton">Submit</button>
                      </form>
                    </div>
        `;
    }

    async _getReview() {
        const reviewlist_wrapper = this.querySelector('.reviewlist_wrapper');
        const reviewList = document.createElement('review-comment');

        reviewlist_wrapper.classList.add('loader');
        const reviewsData = await RestaurantAPI.detailRestaurant(
            this._restaurant.id
        );
        const reviews = reviewsData.restaurant.customerReviews;
        reviewlist_wrapper.classList.remove('loader');
        reviews.forEach((review) => {
            if (review.review != '') {
                reviewList.review = review;
                reviewlist_wrapper.appendChild(reviewList.cloneNode(true));
            }
        });
    }

    _category() {
        return this._restaurant.categories
            .map((category) => ` <span class='capsule'>${category.name}</span>`)
            .join(' ');
    }
}

customElements.define('restaurant-detail', DetailRestaurant);
