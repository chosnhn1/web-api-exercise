let element;

// first animation
// 5 seconds of moving back and forth, with infinite iteration
element.animate([
  { transform: 'translateX(0)' },
  { transform: 'translateX(250px)' }
], {
  duration: 5000,
  direction: 'alternate',
  iterations: Infinity,
  easing: 'ease-in-out'
});

// add another animation
// 3 seconds of spinning with infinite iteration
element.animate([
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
], {
  duration: 3000,
  iterations: Infinity,

  // add animation with "composite" option:
  composite: 'add'
  // if not: this animate call will overwrite the original one; so first animation will not be done
});