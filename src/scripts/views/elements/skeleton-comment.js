class SkeletonComment extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <li>
    <div class="comment_container">
    <div class="comments">
        <div class="v-card v-sheet elevation-2">
            <div class="header">
                <div class="displayName title skeleton" style="height: 40px;"></div>
                <div class="displayName caption skeleton" style="height: 40px;"></div>
            </div>
            <div class="wrapper comment skeleton" style="height: 70px; --c-w: 650px;"></div>
        </div>
    </div>
</div>
</li>
          `;
  }
}

customElements.define('skeleton-comment', SkeletonComment);
