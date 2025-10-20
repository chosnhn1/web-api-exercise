function readFileContent(file, onSuccess) {
  const reader = new FileReader();

  reader.addEventListener('load', event => {
    onSuccess(event.target.result);
  });

  reader.addEventListener('error', event => {
    console.error('Error while read a file: ', event);
  });

  reader.readAsText(file);
}

const fileInput = document.querySelector('#select-file');
fileInput.addEventListener('change', event => {

  // fileInput can get multiple files; let's get only one of them:
  const [file] = fileInput.files;

  // what will you do with that text file?:
  readFileContent(file, content => {
    const textArea = document.querySelector('.file-content-textarea');
    textArea.textContent = content;
  });
});