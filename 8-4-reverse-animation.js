let element;

element.addEventListener('mouseover', async () => {
  if (animation) {
    animation.reverse();
  } else {
    animation = element.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(2)' },
    ], {
      duration: 1000,
      fill: 'both'
    });

    await animation.finished;
    animation = null;
  }
});

let button;
button.addEventListener('mouseout', async () => {
  if (animation) {
    animation.reverse();
  } else {
    animation = button.animate([
      { transform: 'scale(2)' },
      { transform: 'scale(1)' },
    ], {
      duration: 1000,
      fill: "both"
    });

    await animation.finished;
    animation = null;
  }
})

let animation = null;
async function animate(element, direction) {
  if (animation) {
    animation.reverse();
  } else {
    animation = element.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(2)' }
    ], {
      duration: 1000,
      // fill mode
      fill: 'forwards',
      direction: direction
    });

    await animation.finished;
    animation = null;
  }
}

element.addEventListener('mouseover', () => {
  animate(element, 'normal');
});

element.addEventListener('mouseover', () => {
  animate(element, 'reverse');
});