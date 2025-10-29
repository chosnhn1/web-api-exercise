const users = [
  {id: 1, firstName: "", lastName: "", department: ""},
]

console.log('Updating user data...');

for (const user of users) {
  console.group(`User: ${user.firstName} ${user.lastName}`);
  console.log('Load user data from API...');
  const response = await fetch(`/api/users/${user.id}`);
  const userData = await response.json();

  console.log('Updating profile...');
  userData.lastUpdated = Date.now();

  console.log('Saving user data...')
  await fetch(`/api/users/${user.id}`, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.groupEnd();

}