let counterValue = 0;

const targetBtnDecrement = document.querySelector('[data-action="decrement"]');
const targetBtnIncrement = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');

targetBtnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

targetBtnIncrement.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
