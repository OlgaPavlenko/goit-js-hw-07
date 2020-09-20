const validationInput = document.getElementById('validation-input');
const validationInputLength = Number(validationInput.dataset.length);

validationInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  validationInput.classList.remove('invalid');
  validationInput.classList.remove('valid');

  if (event.currentTarget.value.length === validationInputLength) {
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.add('invalid');
  }
}
