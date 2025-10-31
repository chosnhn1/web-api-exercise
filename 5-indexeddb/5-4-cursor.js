// employeeDb is opened;

function searchEmployees(name, onSuccess) {
  const results = [];

  const query = name.toLowerCase();

  const request = employeeDb
  .transaction(['employees'], 'readonly')
  .objectStore('employees')
  .openCursor();

  request.addEventListener('success', () => {
    const cursor = request.result;
    if (cursor) {
      const name = `${cursor.value.firstName} ${cursor.value.lastName}`
      .toLowerCase();

      if (name.includes(query)) {
        results.push(cursor.value);
      }

      cursor.continue();
    } else {
      onSuccess(results);
    }
  });

  request.addEventListener('error', () => {
    console.error('Error while searching employees: ', request.error);
  });
}