const inputControlSize = document.getElementById('font-size-control');
const changableInput = document.getElementById('text');
// changableInput.setAttribute('style', 'font-size: 50px;');

inputControlSize.addEventListener('input', onInputChangeSize);

function onInputChangeSize(event) {
  //   console.log(event.currentTarget.value);
  changableInput.setAttribute(
    'style',
    `font-size: ${event.currentTarget.value}px;`,
  );
}
