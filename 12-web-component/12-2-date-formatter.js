class DateFormatter extends HTMLElement {

  // say what attrs you want to be observed by browser: 
  static observedAttributes = ['date'];

  constructor() {
    super();
    this.formatter = new Intl.DateTimeFormat(
      navigator.language, { dateStyle: 'full' }
    );
  }

  formatDate() {
    if (this.hasAttribute('date')) {
      this.textContent = this.formatter.format(
        new Date(this.getAttribute('date'))
      );
    } else {
      this.textContent = '';
    }
  }

  // on attr change:
  attributeChangedCallback() {
    this.formatDate();
  }

  // on first connection:
  connectedCallback() {
    this.formatDate();
  }
}

customElements.define('date-formatter', DateFormatter);