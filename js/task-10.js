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
      newDiv.style.width = 30 + 10 * i + "px";
      newDiv.style.height = 30 + 10 * i + "px";
      newDiv.style.backgroundColor = getRandomHexColor();
      divBox.append(newDiv);
    }
  } else {
    alert("You don't pay me enough for this.");
  }
};

btnCreate.addEventListener("click", createBoxes);
