// warning: URLPattern is relatively new API, browser compatibility must be checked;

const profilePattern = new URLPattern({
  pathname: '/api/users/:userId/profile'
});

// test part

console.log(profilePattern.test('/api/users/123/profile')); // false

console.log(profilePattern.test('https://example.com/api/users/123/profile'));  // true
 
console.log(profilePattern.test(new URL('https://example.com/api/users/123/profile'))); // true

console.log(profilePattern.test(new URL('https://example.com/v1/api/users/123/profile'))); // false


// example using wildcard letters
const wildcardProfilePattern = new URLPattern({
  pathname: '/*/api/users/:userId/profile'
})

console.log(wildcardProfilePattern.test('https://example.com/v1/api/users/123/profile')); // true