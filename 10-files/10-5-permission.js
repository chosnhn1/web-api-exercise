async function canAccessFile() {
  if ('showOpenFilePicker' in window) {
    const [file] = window.showOpenFilePicker();

    let result = await file.queryPermission({ mode: 'readwrite' });
    if (result === 'prompt') {
      result = await file.requestPermission({ mode: 'readwrite' });
    }

    return result === 'granted';
  }

  return false;
}