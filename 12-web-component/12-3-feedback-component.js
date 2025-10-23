const template = document.createElement('template');
template.innerHTML = `
  <style>
    .feedback-prompt {
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    
    button {
        padding: 0.5em 1em;
    }
  </style>

  <div class="feedback-prompt">
    <p>Is the contents of this page helpful to you?</p>
    <button type="button" data-helpful="true">Yes</button>
    <button type="button" data-helpful="false">No</button>
  </div>
`;

class FeedbackRating extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.feedback-prompt')
    .addEventListener('click', event => {
      const { helpful } = event.target.dataset;
      if (typeof helpful !== 'undefined') {
        this.shadowRoot.querySelector('.feedback-prompt').remove();
        this.shadowRoot.textContent = 'Thanks for your feedback!';

        this.helpful = helpful === 'true';

        this.shadowRoot.dispatchEvent(
          new CustomEvent('feedback', {
            composed: true,
            bubbles: true
          })
        );
      }
    });
  }
}

customElements.define('feedback-rating', FeedbackRating);

document.querySelector('feedback-rating').addEventListener('feedback', event => {
  console.log('feedback event listened.');
});
