const containerSel = document.getElementById("container");

const obj = {
  name: "John",
  occupation: "Machine Learning Engineer",
  age: 32,
  city: "Los Angeles",
  yearOfBirth: 1987
};

const renameKey = (obj, key, newKey) => {
  const objToArr = Object.entries(obj);
  const updateArr = objToArr.map(i => {
    if (i[0] === key) {
      return [newKey, i[1]];
    }
    return i;
  });
  return Object.fromEntries(updateArr);
};

const revisedObj = renameKey(obj, "yearOfBirth", "yob");

const getRow = (key, value) => {
  return `<div class="property">
    <div class="propName">${key}</div>
    <div class="propValue">${value}</div>
  </div>`;
};

const renderObj = obj => {
  Object.keys(obj).forEach(item => {
    containerSel.innerHTML += getRow(item, obj[item]);
  });
};

renderObj(obj);
