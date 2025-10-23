class TodaysDate extends HTMLElement {
  connectedCallback() {
    const formatter = new Intl.DateTimeFormat(
      navigator.language,
      { dateStyle: 'full' }
    );

    this.textContent = formatter.format(new Date());
  }
}

customElements.define('todays-date', TodaysDate);