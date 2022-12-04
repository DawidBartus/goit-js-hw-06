const list = document.querySelector("#categories").children;
console.log("Number of categories: " + list.length);

for (const element of list) {
  console.log(`Categoriy: ${element.firstElementChild.innerText}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
