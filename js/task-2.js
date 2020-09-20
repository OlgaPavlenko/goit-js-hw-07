const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const option = ingredients[0];

const createIngredients = options => {
  return options.map(option => {
    const ingredient = document.createElement('li');
    ingredient.textContent = option;

    return ingredient;
  });
};

const options = createIngredients(ingredients);
ingredientsEl.append(...options);

console.log(ingredientsEl);
