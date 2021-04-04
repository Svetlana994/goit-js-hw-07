const inputEl = document.querySelector('#validation-input');
const inputAttributeLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputChange)

function onInputChange(event) {
    if (inputAttributeLength >= event.currentTarget.value.length) { 
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } if (inputAttributeLength < event.currentTarget.value.length) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}
