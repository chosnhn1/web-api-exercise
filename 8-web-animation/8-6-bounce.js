async function animateBounce(element) {
  const distances = ['40px', '20px', '10px'];

  // watch out for using "for-of" syntax; "forEach() will work differently (and less properly with asynchronous tasks)"
  for (let distance of distances) {
    await element.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-${distance})', offset: 0.5 },
      { transform: 'translateY(0)' }
    ], {
      duration: 250,
      easing: 'ease-in-out'
    }).finished;
  }
}