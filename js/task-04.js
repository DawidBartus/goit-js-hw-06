let startVal = 0;
const value = document.querySelector("#value");
const decOne = document.querySelector('[data-action="decrement"]');
const incOne = document.querySelector('[data-action="increment"]');

const dec = () => {
  startVal--;
  value.textContent = startVal;
};

const inc = () => {
  startVal++;
  value.textContent = startVal;
};

decOne.addEventListener("click", dec);
incOne.addEventListener("click", inc);
