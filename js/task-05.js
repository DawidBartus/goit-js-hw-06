const input = document.querySelector("#name-input");
const underInput = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value === "") {
    underInput.textContent = "Anonymous";
  } else {
    underInput.textContent = input.value;
  }
});
