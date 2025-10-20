function openDatabase(onSuccess) {
  // request on opening "contacts" database
  const request = indexedDB.open('contacts');

  // if needed, create Object Store:
  request.addEventListener('upgradeneeded', () => {
    const db = request.result;
    db.createObjectStore('contacts', {
      keyPath: 'id',
      autoIncrement: true
    });
  });

  // if Db is ready: call onSuccess
  request.addEventListener('success', () => {
    const db = request.result;
    onSuccess(db);
  });

  // error handling;
  request.addEventListener('error', () => {
    console.error('Error occurred while opening DB: ', request.error);
  })
}

function getContacts(contactsDb, onSuccess) {
  const request = contactsDb
  .transaction(['contacts'], 'readonly')
  .objectStore('contacts')
  .getAll();

  request.addEventListener('success', () => {
    console.log('Contact Imported: ', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.error('Error occurred while reading contacts: ', request.error);
  });
}

function addContact(contactsDb, contact, onSuccess) {
  const request = contactsDb
  .transaction(['contacts'], 'readwrite')
  .objectStore('contacts')
  .add(contact);
  
  request.addEventListener('success', () => {
    console.log('New contact added: ', contact);
    onSuccess();
  });
  
  request.addEventListener('error', () => {
    console.error('Error occurred while adding contact: ', request.error);
  }); 
}

function deleteContact(contactsDb, contact, onSuccess) {
  const request = contactsDb
  .transaction(['contacts'], 'readwrite')
  .objectStore('contacts')
  .delete(contact.id);
  
  request.addEventListener('success', () => {
    console.log('Contact deleted: ', contact);
    onSuccess();
  });
  
  request.addEventListener('error', () => {
    console.error('Error occurred while deleting contact: ', request.error);
  }); 
}
