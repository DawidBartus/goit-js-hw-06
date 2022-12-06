const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector('[type="number"]');
const divBox = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  let amount = input.value;
  if (amount <= 100) {
    for (let i = 0; i < input.value; i++) {
      const newDiv = document.createElement("div");
      let size = 30 + 10 * i;
      newDiv.style.width = size + "px";
      newDiv.style.height = size + "px";
      newDiv.style.backgroundColor = getRandomHexColor();
      divBox.append(newDiv);
    }
  } else {
    alert("You don't pay me enough for this.");
  }
};
const destroy = () => {
  while (divBox.firstChild) {
    divBox.removeChild(divBox.firstChild);
  }
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroy);
