const animationSeconds = 2;
const fps = 60;

const frameInterval = 1000 / fps;
const frameCount = animationSeconds * fps;

const opacityIncrement = 1 / frameCount;

let lastTimestamp;
let opacity = 1;

const box = document.querySelector("#box")

function fade(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  const elapsed = timestamp - lastTimestamp;
  if (elapsed < frameInterval) {
    requestAnimationFrame(fade);
    return;
  }

  lastTimestamp = timestamp;

  opacity = Math.max(0, opacity - opacityIncrement)
  box.style.opacity = opacity;
  if (opacity > 0) {
    requestAnimationFrame(fade);
  }
}

requestAnimationFrame(fade);