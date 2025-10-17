const apiToken = 'asdf1234'
// I would use dotenv etc. for saving API keys

const form = document.querySelector('#form');

form.addEventListener('submit', event => {
  // prevent default browser operation (eg. refresh)
  event.preventDefault();

  const data = new FormData(event.target);
  data.set('apiToken', apiToken);
  fetch('/api/form', {
    method: 'POST',
    body: data
  });
});