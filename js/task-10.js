const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector('[type="number"]');
const divBox = document.querySelector("#boxes");
let startVal = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  let amount = input.value;

  if (amount <= 100) {
    for (let i = 0; i < input.value; i++) {
      const newDiv = document.createElement("div");
      const size = startVal + 10 * i;
      newDiv.style.width = size + "px";
      newDiv.style.height = size + "px";
      newDiv.style.backgroundColor = getRandomHexColor();
      divBox.append(newDiv);
    }
  } else {
    alert("You don't pay me enough for this.");
  }
  startVal = divBox.childNodes.length * 10 + 30;
  return startVal;
};

const destroyBoxes = () => {
  while (divBox.firstChild) {
    divBox.removeChild(divBox.firstChild);
  }
  startVal = 30;
  return startVal;
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
