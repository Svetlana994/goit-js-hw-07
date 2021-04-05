const inputEl = document.querySelector('#controls input');
const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
const boxContainer = document.querySelector('#boxes');
const maxValue = +inputEl.getAttribute('max');

btnRender.addEventListener('click', onRenderBtnClick);
btnDestroy.addEventListener('click', onDestoryBtnClick);

function onRenderBtnClick() {
    const value = +inputEl.value
    createBoxes(value)
}

function createBoxes (amount) {
    const arr = [];

    for (let i = 0; i < amount; i += 1) {
        if (amount <= maxValue) {
            boxContainer.innerHTML = '';
            
            const rgbColors = Array.from('rgb').map(() => {
            return Math.floor(Math.random() * 255)
        });
        console.log(rgbColors)
     const divEl = document.createElement("div");
     const style = `width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: rgb(${rgbColors}); margin-top: 10px;`
    divEl.setAttribute('style', style );
     
        arr.push(divEl);
        } else {
            boxContainer.innerHTML = 'Количество боксов не должно превышать 100';
    }
    
 }
     boxContainer.append(...arr)
}

function onDestoryBtnClick() {
    boxContainer.innerHTML = "";
    inputEl.value = "";
}
