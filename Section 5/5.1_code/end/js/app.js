const addItemInputSel = document.getElementById("addItemInput");
const listBoxSel = document.getElementById("listBox");

class RenderUtils {
  static #listItem = item => `<div class="listItem">${item}</div>`;
  static render(list) {
    listBoxSel.innerHTML = "";
    list.forEach(item => {
      listBoxSel.innerHTML += RenderUtils.#listItem(item);
    });
  }
}

class ShoppingList {
  #list = [];
  add = item => {
    this.#list.push(item);
    RenderUtils.render(this.#list);
  };
}

const app = new ShoppingList();

addItemInputSel.addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    app.add(e.target.value);
    e.target.value = "";
  }
});
