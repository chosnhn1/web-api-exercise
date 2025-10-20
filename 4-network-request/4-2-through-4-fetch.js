// Fetch GET req
function loadUsers() {
  return fetch('/api/users')
    .then(response => response.json)
    .catch(error => console.error('fetch error:', error.message));
}

loadUsers().then(users => {
  console.log('User list: ', users);
});


// Example using async/await keywords instead of Promise
async function loadUsers2() {
  try {
    const response = await fetch('/api/users');
    return response.json();
  } catch (error) {
    console.error('Error loading user: ', error);
  }
}

async function printUsers() {
  const users = await loadUsers2();
  console.log('User list: ', users);
}

// Fetch POST req
function createUser(firstName, lastName, department) {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ firstName, lastName, department }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json());
}

createUser('John', 'Doe', 'Engineering')
.then(() => console.log('User created.'))
.catch((error) => console.error('Error creating user: ', error));

// Fetch form data with POST
fetch('/login', {
  method: 'POST',
  body: 'username=sysadmin&password=password',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}).then(response => response.json())
.then(data => console.log('Logged in: ', data))
.catch(error => console.error('Login error: ', error));

// Upload file with Fetch
function uploadFile(form) {
  const formData = new FormData(form);
  const fileData = formData.get('file');
  return fetch('https://httpbin.org/post', {
    method: 'POST',
    body: fileData
  })
  .then(response => response.json());
}
