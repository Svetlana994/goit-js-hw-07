const inputEl = document.querySelector('#validation-input');
const inputAttributeLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputChange)

function onInputChange(event) {
    if (inputAttributeLength >= event.currentTarget.value.length) { 
    this.classList.remove('valid');
    this.classList.add('invalid');
  } if (inputAttributeLength < event.currentTarget.value.length) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
}
