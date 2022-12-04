const input = document.querySelector("#validation-input");
const maxInputLength = input.getAttribute("data-length");

const getAttribute = () => {
  if (input.value.length == maxInputLength) {
    input.classList.remove(...input.classList);
    input.classList.add("valid");
  } else {
    input.classList.remove(...input.classList);
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", getAttribute);
