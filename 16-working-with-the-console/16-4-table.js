// Array example:
const users = [
  {firstName: "Thomas", lastName: "Eddison", department: "Electronics"},
  {firstName: "James", lastName: "Cook", department: "Management"},
  {firstName: "Immanuel", lastName: "Kant", department: "Research"},
  {firstName: "Henry", lastName: "Brown", department: "Management"},
];

console.table(users);

// constrain columns to show
console.table(users, ['firstName', 'lastName']);

// Object example:
console.table({
  name: 'sysadmin',
  email: 'admin@service.sample.com'
});

