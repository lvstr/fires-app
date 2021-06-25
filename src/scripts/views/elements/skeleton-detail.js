class SkeletonDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="detail_container">
        
    <div class="detail_img skeleton" style="--c-w: 90%; height: 400px;">
    </div>
    <div class="detail_content">
        <div class="info_wrapper">
            <div class="skeleton" style="--c-w: 240px; height: 40px;"></div>
            <div class="skeleton" style="--c-w: 230px; height: 40px;"></div>
            <div class="detail_category"></div> <span class="capsule skeleton" style="--c-w: 100px; height: 40px"></span>  <span class="capsule skeleton" style="--c-w: 100px; height: 40px"></span></div>

            <div class="detail_description">
                <div class="skeleton" style="--c-w: 230px; height: 40px"></div>
                <div class="skeleton skeleton-line" style=" --c-w: 100%;
    --lines: 6; 
    --l-h: 25px; 
    --l-gap: 8px; height: 144px;"></>
            </div>
        </div>

        <div class="tab_wrapper skeleton" style="height: 250px; --c-w: 100%"></div>
    </div>
</div>
          `;
  }
}

customElements.define('skeleton-detail', SkeletonDetail);
