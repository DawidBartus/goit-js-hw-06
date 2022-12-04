const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (const ingridient of ingredients) {
  let listElement = document.createElement("li");
  listElement.textContent = ingridient;
  listElement.classList = ingridient;
  list.append(listElement);
}
