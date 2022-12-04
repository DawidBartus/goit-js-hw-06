const input = document.querySelector("#name-input");
const underInput = document.querySelector("#name-output");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (input.value === "") {
      underInput.textContent = "Anonymous";
    } else {
      underInput.textContent = input.value;
    }
  }
});
