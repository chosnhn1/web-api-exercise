const colorPicker = document.querySelector('#colorPicker');

const storedValue = localStorage.getItem('savedColor');
if (storedValue) {
  console.log('Saved color found: ', storedValue);
  colorPicker.value = storedValue
}

colorPicker.addEventListener('change', event => {
  localStorage.setItem('savedColor', event.target.value);
  console.log('New color saved: ', colorPicker.value);
});

console.log("Color Picker started.")