const nameInput = document.getElementById('name-input');
// console.log(enteredName);
const nameOut = document.getElementById('name-output');

nameInput.addEventListener('input', onInputChange);

function onInputChange(event) {
  nameOut.textContent = event.currentTarget.value;

  if (nameOut.textContent === '') {
    nameOut.textContent = 'незнакомец';
  }
}
