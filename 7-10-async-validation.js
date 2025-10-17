// What if you want to call async api call for validation?
// eg. Password Strength check (this example), id dupe check, etc.

async function validatePasswordStrength(form) {
  const { password } = form.elements;

  // more proper (or, must) way is https & encrypt this type of api calls
  const response = await fetch(`/api/password-strength?password=${password.value}`);
  const result = await response.json();

  if (result.status === 'error' ) {
    password.setCustomValidity(result.error);
  } else {
    password.setCustomValidity('');
  }
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  await validatePasswordStrength(form);
  console.log(form.checkValidity());
})

form.elements.password.addEventListener('blur', async event => {
  const password = event.target;
  const errorElement = document.getElementById('password-error');
  if (password.dataset.shouldValidate) {
    await validatePasswordStrength(form);
    if (password.checkValidity()) {
      errorElement.textContent = '';
      password.classList.remove('border-danger');
    }
  }
});