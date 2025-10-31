// new db has version 2
// note: if version is not passed, default version is 1
const request = indexedDB.open('todoList', 2);

request.addEventListener('upgradeneeded', event => {
  const db = request.result;

  // 1. No DB
  if (event.oldVersion < 1) {
    // base ObjectStore
    db.createObjectStore('todos', {
      keyPath: 'id'
    });
  }

  // 2. Old DB
  if (event.oldVersion < 2) {
    // new ObjectStore
    db.createObjectStore('people', {
      keyPath: 'id'
    });
  }
});

request.addEventListener('success', () => {
  // DB ready:
});

request.addEventListener('error', () => {
  console.error('Error opening db: ', request.error);
});
