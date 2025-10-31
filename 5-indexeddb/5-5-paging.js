function getPaginatedRecords(db, storeName, offset, length) {
  const request = db
  .transaction([storeName], 'readonly')
  .objectStore(storeName)
  .openCursor();

  const results = [];

  let skipped = false;

  request.addEventListener('success', event => {
    const cursor = event.target.result;

    if (!skipped) {
      skipped = true;
      cursor.advance(offset);

    } else if (cursor && results.length < length) {
      results.push(cursor.value);
      cursor.continue();

    } else {
      console.log('Data brought: ', request.result);
    }
  });

  request.addEventListener('error', () => {
    console.error('Error on bringing data: ', request.error);
  });
  
}