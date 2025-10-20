function readFileContent(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', event => {
      resolve(event.target.result);
    });    
    reader.addEventListener('error', reject);    
    reader.readAsText(file);
  });
}

const fileInput = document.querySelector('#select-file');
fileInput.addEventListener('change', async event => {
  const [file] = fileInput.files;
  try {
    const content = await readFileContent(file)
    .then(() => {
      const textArea = document.querySelector('.file-content-textarea');
      textArea.textContent = content;
    })
  } catch (error) {
    console.error('Error while read a file: ', error);
  }
});