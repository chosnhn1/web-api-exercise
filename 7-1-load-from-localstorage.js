const form = document.querySelector('#login-form');

// if there is username in localStorage, set it to form
const username = localStorage.getItem('username');
if (username) {
  form.elements.username.value = username;
}

// if submit happens, save username into localStorage
form.addEventListener('submit', event => {
  const data = new FormData(form);
  localStorage.setItem('username', data.get('username'));
});