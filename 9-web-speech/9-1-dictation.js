function startDictation(textField) {
  // check compatibility
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.addEventlistener('result', event => {
      const result = event.results[event.resultIndex];
      textField.value += result[0].transcript;
    });

    recognition.addEventlistener('error', event => {
      console.log('Error in speech recognition: ', event);
    })

    recognition.start();

    return recognition;

  } else {
    console.log('Speech Recognition not supported.');
  }
}