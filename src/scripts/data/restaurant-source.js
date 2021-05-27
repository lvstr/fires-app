import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantAPI {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static addNewReveiw(data) {
    fetch(API_ENDPOINT.ADD_NEW_REVIEW, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
    });
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantAPI;
