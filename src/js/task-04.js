const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

buttonDecrement.addEventListener('click', onBtnDecrement);
buttonIncrement.addEventListener('click', onBtnIncrement);

let counterValue = 0;

function onBtnDecrement() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

function onBtnIncrement() {
     counterValue += 1;
    counterEl.textContent = counterValue;
}


