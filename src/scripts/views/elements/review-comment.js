/* eslint-disable no-underscore-dangle */
class Review extends HTMLElement {
  /**
     * @param {any} review
     */
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
        <li>
                                  <div class="comment_container">
                                  <div class="comments">
                                      <div class="v-card v-sheet elevation-2">
                                          <div class="header">
                                              
                                              <span class="displayName title">${
  this._review.name !== ''
    ? this._review.name
    : 'No Name'
}</span>
                                              <span class="displayName caption">${
  this._review.date
}</span>
                                          </div>
                                          <div class="wrapper comment">
                                              <p>
                                              ${
  this._review.review !== ''
    ? this._review.review
    : 'No review'
}
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </li>
        `;
  }
}

customElements.define('review-comment', Review);
