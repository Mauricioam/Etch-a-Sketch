const container = document.querySelector("#container");
const resolutionBtn = document.querySelector("#change-resolution");

const rmvContainer = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

const requestPrompt = () => {
  rmvContainer(container);
  let userInput = Number(prompt("Enter a value", 16));
  console.log();
  if (!Number.isInteger(userInput) || userInput >= 100 || userInput <= 0) {
    alert("Have to be below 100,can't be zero. Has to be integer");
    requestPrompt();
  }

  createDivs(userInput);
};

resolutionBtn.addEventListener("click", requestPrompt);

const createDivs = (resol) => {
  if (!resol) {
    resol = 16;
  }
  let res = resol;
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

createDivs();
