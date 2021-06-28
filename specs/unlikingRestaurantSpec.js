import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurants-idb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButton = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  document
    .getElementById("likeButtonContainer")
    .appendChild(document.createElement("favorite-button"));
};

describe("Unliking A Restaurant", () => {
  beforeEach(async () => {
    addLikeButton();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector("[liked=true]")).toBeTruthy();
  });

  it("should not display like widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector("[liked=false]")).toBeFalsy();
  });

  it("should be able to remove liked restaurant from the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector("favorite-button").dispatchEvent(new Event("click"));
    await document
      .querySelector(".swal2-confirm")
      .dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("should not throw error if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector("[liked=true]").dispatchEvent(new Event("click"));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
