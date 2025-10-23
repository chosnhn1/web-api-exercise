class LazyImage extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.image = document.createElement('img');
    shadowRoot.appendChild(this.image);
  }

  connectedCallback() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {

        // element is on intersecting!
        console.log('Loading image...');
        this.image.src = this.getAttribute('src');

        // after load
        observer.disconnect();
      }
    });

    observer.observe(this);
  }
}

customElements.define('lazy-image', LazyImage);