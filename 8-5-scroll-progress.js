// ! check ScrollTimeline compatibility

const progress = document.querySelector('.scroll-progress');

const timeline = new ScrollTimeline({
  source: document.documentElement
});

progress.animate([
  { transform: 'scaleX(0)' },
  { transform: 'scaleX(1)' },
], {
  timeline
});
