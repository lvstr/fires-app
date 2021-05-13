import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<li class="cards_item">
<div class="card">
  <div class="card_tag">
    <div id='${restaurant.id}'>
      <div id='rating'> 
      <div class="stars-outer">
        <div class="stars-inner"></div>
      </div>
      <div class="rate"><span>${restaurant.rating}</span></div>
    </div>
      </div>
  </div>
  <div class="card_image">
    <img
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${
    restaurant.name
}" width="100%" height="230px"
    />
    <div class="overlay">
      <a href="/detail/${restaurant.id}" class="icon" title="See More">
        <i class="fa fa-eye"></i>
      </a>
    </div>
  </div>
  <div class="card_content">
    <h3 class="card_title">${restaurant.name}</h3>
    <h4 class="city">${restaurant.city}</h4>
    <p class="card_text">
      ${restaurant.description.split(' ', 20).join(' ')}
      <span id="dots">... <a href="/detail/${
          restaurant.id
      }">Read More</a></span>
    </p>
  </div>
</div>
</li>

  `;

const ratingTemplate = (id, rating) => {
    const starTotal = 5;
    const starPercentage = (rating / starTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    document
        .querySelector(`#${CSS.escape(id)}`)
        .querySelector('.stars-inner').style.width = starPercentageRounded;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    ratingTemplate,
};
