async function showLoader(promise) {
  const loader = document.querySelector('#loader');

  // spinning loader
  const spin = loader.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(360deg)' },
  ], {
    duration: 1000,
    iterations: Infinity
  });

  // loader showing on
  loader.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 500,
    fill: 'both'
  });
  
  // wait async workload
  await promise;

  // loader fade out after work done
  await loader.animate([
    { opacity: 1 },
    { opacity: 0 }
  ], {
    duration: 500,
    fill: 'both'
  }).finished;

  // after fading out spin stops
  spin.cancel();

  // return original promise workload for chaining
  return promise;
}

// using example:
// wrap async workload with showLoader
showLoader(
  fetch('https://example.com/api/users')
  .then(response => response.json())
);

