const form = document.querySelector('#form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(event.target);
  const body = {};

  // watch out for-of clause
  for (const [key, value] of data.entries()) {
    body[key] = value;
  }

  fetch('/api/form', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(body => console.log('Response received: ', body))
  .catch(error => console.error('Error occurred: ', error));
});

