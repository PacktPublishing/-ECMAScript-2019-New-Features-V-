const addItemInputSel = document.getElementById("addItemInput");
const listBoxSel = document.getElementById("listBox");

class ShoppingList {
  constructor() {
    this.list = [];
  }
  listItem(item) {
    return `<div class="listItem">${item}</div>`;
  }
  render() {
    listBoxSel.innerHTML = "";
    this.list.forEach(item => {
      listBoxSel.innerHTML += this.listItem(item);
    });
  }
  add(item) {
    this.list.push(item);
    this.render();
  }
}

const app = new ShoppingList();

addItemInputSel.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    app.add(e.target.value);
    e.target.value = "";
  }
});
