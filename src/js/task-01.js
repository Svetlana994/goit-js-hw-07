const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категории.`);

itemsEl.forEach(el => {
  console.log(
      `Категория: ${el.firstElementChild.textContent}.
Количество элементов: ${el.lastElementChild.children.length}`,
  );
});