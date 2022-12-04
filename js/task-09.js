const btn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  let color = getRandomHexColor();
  colorValue.innerHTML = color;
  document.body.style.backgroundColor = color;
};

btn.addEventListener("click", changeColor);
