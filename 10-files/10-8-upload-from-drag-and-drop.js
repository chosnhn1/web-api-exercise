const target = document.querySelector('.drop-target');
target.addEventListener('drop', event => {
  event.preventDefault();

  const [item] = event.dataTransfer.items;
  const file = item.getAsFile();

  if (file.type.startsWith('image/')) {
    fetch('/api/uploadFile', {
      method: 'POST',
      body: file
    });
  }
});

target.addEventListener('dragover', event => {
  event.preventDefault();
});
