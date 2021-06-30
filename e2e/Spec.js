const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#list');
  I.see("There's no favorite Restaurant", '#list');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see("There's no favorite Restaurant", '#list');

  I.amOnPage('/');
  I.seeElement('.card_content a');

  const firstRestaurant = locate('.card_content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.scrollPageToTop();
  I.seeElement('favorite-button');
  I.click('favorite-button');
  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');
  I.click('.swal2-confirm');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.card_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking once Restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card_content a');

  const firstRestaurant = locate('.card_content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.scrollPageToTop();
  I.seeElement('favorite-button');
  I.click('favorite-button');
  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');
  I.click('.swal2-confirm');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.card_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.seeElement('.card_content a');
  I.click(locate('.card_content a').first());
  I.scrollPageToTop();
  I.seeElement('favorite-button');
  I.click('favorite-button');
  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');
  I.click('.swal2-confirm');

  I.amOnPage('/#/favorite');
  I.seeElement('#list');
  I.see("There's no favorite Restaurant", '#list');
});

Scenario('Add a Comment', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.card_content a');

  I.click(locate('.card_content a').first());
  I.scrollPageToTop();

  I.seeElement('.button_wrapper');
  I.seeElement('[data-id="reviews"]');
  I.click('[data-id="reviews"]');

  I.seeElement('.reviews_wrapper');
  I.fillField('name', 'John Doe');
  I.fillField('review', 'Hi, My name is John Doe');

  I.click('#formButton');
  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');
});
