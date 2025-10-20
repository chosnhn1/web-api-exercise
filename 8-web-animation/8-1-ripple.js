const button = document.querySelector(".ripple-button");

button.addEventListener('click', async event => {
  console.log("button clicked");

  const ripple = document.createElement('div');
  ripple.className = 'ripple';

  const rippleSize = Math.max(button.offsetWidth, button.offsetHeight);
  ripple.style.width = `${rippleSize}px`;
  ripple.style.height = `${rippleSize}px`;

  ripple.style.top = `${event.offsetY - (rippleSize / 2)}px`;
  ripple.style.left = `${event.offsetX - (rippleSize / 2)}px`;

  button.appendChild(ripple);

  await ripple.animate([
    { transform: 'scale(0)', opacity: 0.5 },
    { transform: 'scale(2.5)', opacity: 0 },
  ], {
    duration: 500,
    easing: 'ease-in'
  }).finished;

  ripple.remove();

});