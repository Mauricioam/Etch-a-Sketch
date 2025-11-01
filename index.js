const container = document.querySelector("#container");
const secContainer = document.createElement("div");
const thirContainer = document.createElement("div");
const forthCont = document.createElement("div");
let htmlString = "";

const createDivs = (res) => {
  for (let a = 0; a < 16; a++) {
    const cont = document.createElement("div");

    for (let i = 0; i < res; i++) {
      const newDiv = document.createElement("div");
      newDiv.className = `box`;
      cont.appendChild(newDiv);
      container.appendChild(cont);
    }
  }
};
createDivs(16);
