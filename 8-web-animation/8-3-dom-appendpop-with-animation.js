function showElement(element) {
  document.body.appendChild(element);
  // Animation can be applied to already-existing DOM object; so append element first.
  element.animate([
    { opacity: 0},
    { opacity: 1}
  ], {
    duration: 250
  });
}

async function removeElement(element) {
  await element.animate([
    {opacity: 1},
    {opacity: 0}
  ], {
    duration: 250
  }).finished;
  // wait with finished prop (Promise obj),
  // then remove element properly:
  element.remove();
}