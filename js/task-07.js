const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = fontSize.value + "px";

const getValue = () => {
  text.style.fontSize = fontSize.value + "px";
};

fontSize.addEventListener("mousemove", getValue);
