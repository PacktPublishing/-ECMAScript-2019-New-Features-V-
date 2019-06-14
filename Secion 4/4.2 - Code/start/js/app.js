const inputBoxSel = document.getElementById("inputBox");
const userSel = document.getElementById("user");
const domainSel = document.getElementById("domain");
const tldSel = document.getElementById("tld");
const outputTxtSel = document.getElementById("outputTxt");

const REG_EMAIL = /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/gi;

inputBoxSel.addEventListener("keyup", e => {
  matchEmail(e.target.value);
});

const matchEmail = txt => {
  outputTxtSel.innerHTML = txt;
};
