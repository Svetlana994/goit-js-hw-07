const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (inputEl === '') {
        spanEl.textContent = 'незнакомец';
    }
    spanEl.textContent = event.currentTarget.value
}
