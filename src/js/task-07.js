const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputRange);

function onInputRange() {
    spanEl.style.fontSize = `${inputEl.value}px`
}