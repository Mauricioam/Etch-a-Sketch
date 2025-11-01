const container = document.querySelector("#container");

const createDivs = (res) => {
  let resolution = res * res;
  let boxSize = 400 / res;

  for (let a = 0; a < resolution; a++) {
    const cont = document.createElement("div");
    cont.style.width = `${boxSize}px`;
    cont.style.height = `${boxSize}px`;
    cont.style.background = "blue";
    container.appendChild(cont);
  }
};
createDivs(16);
