class SkeletonCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
    <div class="card_image skeleton" style="--c-w: 100%;" ></div>
      <div class="card_content">
        <div class="card_title skeleton skeleton-line" style="--l-h: 25px; --c-w: 100%;"></div>
        <div class="city skeleton skeleton-line" style="--c-w: 100px; --l-h: 20px;" ></div>
        <div class="card_text skeleton skeleton-line"   style="
        --c-w: 100%;
        --lines: 6; 
        --l-h: 10px; 
        --l-gap: 8px; 
    "></div>
      </div>
    </div>
        `;
  }
}

customElements.define('skeleton-card', SkeletonCard);
