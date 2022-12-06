const btn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  let color = getRandomHexColor();
  colorValue.innerHTML = color;
  body.style.backgroundColor = color;
};

btn.addEventListener("click", changeColor);
