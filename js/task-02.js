const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const productsListEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('ingredients-item');
    itemEl.textContent = option;

    return itemEl;
})

productsListEl.append(...elements)

console.log(productsListEl)
