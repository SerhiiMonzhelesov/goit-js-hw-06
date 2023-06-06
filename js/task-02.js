const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients")

const ingredientsItems = ingredients.map(el => {
  const li = document.createElement('li')
  li.append(el)
  li.classList.add('item')

  return li
})

listIngredients.append(...ingredientsItems)

 