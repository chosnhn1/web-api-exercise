function openDatabase(onSuccess) {
  const request = indexedDB.open('employees');

  request.addEventListener('upgradeneeded', () => {
    const db = request.result;

    const employeesStore = db.createObjectStore('employees', {
      keyPath: 'id',
      autoIncrement: true,
    });

    // define index
    employeesStore.createIndex('department', 'department');
  });

  request.addEventListener('success', () => {
    onSuccess(request.result);
  });
}

function getEmployees(department, onSuccess) {
  const request = employeeDb
  .transaction(['employees'], 'readonly')
  .objectStore('employees')
  .index('department')
  .getAll(department);

  request.addEventListener('success', () => {
    console.log('Employee List: ', request.result);
    onSuccess(request.result);
  });

  request.addEventListener('error', () => {
    console.log('Error while loading employee list: ', request.error);
  });
}