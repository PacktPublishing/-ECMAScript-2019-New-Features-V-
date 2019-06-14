const inputBoxSel = document.getElementById("inputBox");
const userSel = document.getElementById("user");
const domainSel = document.getElementById("domain");
const tldSel = document.getElementById("tld");
const outputTxtSel = document.getElementById("outputTxt");

const REG_EMAIL = /(?<user>[a-zA-Z0-9_\-\.]+)@(?<domain>[a-zA-Z0-9_\-\.]+)\.(?<tld>[a-zA-Z]{2,5})/gi;

inputBoxSel.addEventListener("keyup", e => {
  matchEmail(e.target.value);
});

const matchEmail = txt => {
  // Highlight and replace email IDs
  const highlightEmail = txt.replace(
    REG_EMAIL,
    '<div class="highlight">$<user> at $<domain> dot $<tld></div>'
  );
  outputTxtSel.innerHTML = highlightEmail;

  // Extract entities
  const entities = REG_EMAIL.exec(txt);
  if (entities) {
    const {user, domain, tld} = entities.groups;
    userSel.value = user;
    domainSel.value = domain;
    tldSel.value = tld;
  }
};
