window.addEventListener('storage', event => {
  if (event.key === 'savedColor') {
    console.log("Color has been set in other tab: ", event.newValue);
    colorPicker.value = event.newValue;
  }
});