const container = document.querySelector("#container");

const createDivs = () => {
  let res = requestPrompt();
  let resolution = res * res;
  let boxSize = 400 / res;

  for (let a = 0; a < resolution; a++) {
    const cont = document.createElement("div");
    cont.style.width = `${boxSize}px`;
    cont.style.height = `${boxSize}px`;
    container.appendChild(cont);
    cont.addEventListener("mouseenter", () => {
      cont.style.background = "red";
    });
  }
};

const requestPrompt = () => {
  let userInput = prompt("Enter a value", 16);
  if (userInput >= 100) {
    alert("Have to be below 100");
    requestPrompt();
  }
  return userInput;
};

createDivs();
