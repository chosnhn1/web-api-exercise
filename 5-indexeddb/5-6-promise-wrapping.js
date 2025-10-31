function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('contacts-promise');
    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      db.createObjectStore('contacts', {
        keyPath: 'id',
        autoIncrement: true
      });
    });

    request.addEventListener('success', () => resolve(request.result));
    request.addEventListener('error', () => reject(request.error));
  });
}

function getContacts() {
  return new Promise((resolve, reject) => {
    const request = contactsDb
    .transaction(['contacts'], 'readonly')
    .objectStore('contacts')
    .getAll();

    request.addEventListener('success', () => {
      console.log('Contacts: ', request.result);
      resolve(request.result);
    });

    request.addEventListener('error', () => {
      console.error('Error on reading contacts: ', request.error);
      reject(request.error);
    });
  });
}

// apply like this:
async function loadAndPrintContacts() {
  try {
    const db = await openDatabase();
    const contacts = await getContacts();
    console.log('Contacts: ', contacts);
    
  } catch (error) {
    console.error('Error: ', error);
  }
}