const containerSel = document.getElementById("container");

const obj = {
  name: "John",
  occupation: "Machine Learning Engineer",
  age: 32,
  city: "Los Angeles",
  yearOfBirth: 1987
};

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
