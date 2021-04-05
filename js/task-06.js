const inputEl = document.querySelector('#validation-input');
const inputAttributeLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputChange)

function onInputChange(event) {
  if (+inputAttributeLength === event.currentTarget.value.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');

  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
