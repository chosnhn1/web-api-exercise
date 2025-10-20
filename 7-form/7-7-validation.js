function addValidation(element) {
  const errorElement = document.getElementById(`${element.id}-error`);

  // on invalid input:
  element.addEventListener('invalid', () => {
    errorElement.textContent = element.validationMessage;
    element.dataset.shouldValidate = true;
  });

  // on new input:
  element.addEventListener('input', () => {
    if (element.dataset.shouldValidate) {
      if (element.checkValidity()) {
        errorElement.textContent = '';
      }
    }
  });

  // on losting focus:
  element.addEventListener('blur', () => {
    element.dataset.shouldValidate = true;
  });
}

// 7.8. custom validation
// eg. Check matching two password
function validatePasswordsMatch(form) {
  const { password, confirmPassword } = form.elements;

  if (password.value !== confirmPassword.value ) {
    confirmPassword.setCustomValidity('Passwords are not matching.');
  } else {
    confirmPassword.setCustomValidity('');
  }

  // if you use browser validation UI, you will want to call this:
  // password.reportValidity();
}


const form = document.querySelector('#form');
addValidation(form.elements.name);
addValidation(form.elements.email);
form.addEventListener('submit', event => {
  event.preventDefault();

  // custom validation: 
  validatePasswordsMatch(form);

  if (form.checkValidity()) {
    console.log("Form sent.")
    // fetch('/api/')
  }
});
