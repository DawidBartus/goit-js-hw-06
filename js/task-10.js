const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector('[type="number"]');
const divBox = document.querySelector("#boxes");

console.log(divBox.hasChildNodes());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chceckStartValue = () => {
  if (divBox.hasChildNodes() === true) {
    let value = parseInt(divBox.lastChild.style.width) + 10;
    return value;
  } else {
    let value = 30;
    return value;
  }
};

const createBoxes = () => {
  let amount = input.value;
  let startValue = chceckStartValue();
  if (amount <= 100) {
    console.log(startValue);
    for (let i = 0; i < input.value; i++) {
      const newDiv = document.createElement("div");
      const size = startValue + 10 * i;
      newDiv.style.width = size + "px";
      newDiv.style.height = size + "px";
      newDiv.style.backgroundColor = getRandomHexColor();
      divBox.append(newDiv);
    }
  } else {
    alert("You don't pay me enough for this.");
  }
};

const destroyBoxes = () => {
  while (divBox.firstChild) {
    divBox.removeChild(divBox.firstChild);
  }
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

// const createBoxes = () => {
//   let amount = input.value;
//   if (amount <= 100) {
//     if (divBox.hasChildNodes() === false) {
//       for (let i = 0; i < input.value; i++) {
//         const newDiv = document.createElement("div");
//         const size = 30 + 10 * i;
//         newDiv.style.width = size + "px";
//         newDiv.style.height = size + "px";
//         newDiv.style.backgroundColor = getRandomHexColor();
//         divBox.append(newDiv);
//       }
//     } else {
//       let startValue = parseInt(divBox.lastChild.style.width);
//     }
//   } else {
//     alert("You don't pay me enough for this.");
//   }
// };
