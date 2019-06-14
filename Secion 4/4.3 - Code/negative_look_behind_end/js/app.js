import inventory from "./inventory";

const patternSel = document.getElementById("pattern");
const listBoxSel = document.getElementById("listBox");

const pattern = /(?<!blue)berries/i;

(() => {
  let nodes = "";
  inventory.forEach(({ berry }) => {
    if (berry.search(pattern) !== -1) {
      nodes += `<div class="listItem">${berry}</div>`;
    }
  });

  listBoxSel.innerHTML = nodes;
  patternSel.innerText = pattern;
})();
