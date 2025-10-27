async function getPermission() {
  if (Notification.permission !== 'denied') {
    await Notification.requestPermission();

  }
  return Notification.permission === 'granted';
}


// Use it like this:

// if (await getPermission()) {
//   new Notification("Hello!", {
//     body: 'This is test note.'
//   });
// }


const trigger = document.querySelector('#trigger');
trigger.addEventListener('click', async () => {
  if (await getPermission()) {
    new Notification("Hello!", {
      body: "This is test note."
    });
  }
})