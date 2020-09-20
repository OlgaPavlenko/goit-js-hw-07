console.log(`В списке ${document.querySelectorAll('.item').length} категории.`);

document
  .querySelectorAll('.item')
  .forEach(child =>
    console.log(
      `Категория: ${child.firstElementChild.textContent} Количество элементов: ${child.firstElementChild.nextElementSibling.children.length} `,
    ),
  );
