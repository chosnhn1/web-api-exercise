function getUsers() {
  const request = new XMLHttpRequest();

  request.addEventListener('load', event => {
    const users = JSON.parse(event.target.responseText);
    console.log('User Info: ', users);
  })

  request.addEventListener('error', err => {
    console.log('Error: ', err);
  })

  request.open('GET', '/api/users');
  request.send();
}
