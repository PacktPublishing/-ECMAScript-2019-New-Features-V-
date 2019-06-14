const contentBoxSel = document.getElementById("container");
const paragraph = `As the fire roared, Sir Green rose up from his chair and pointed at Sir Anthony, "You shall go with Sir Arthur and Sir James to the Iron Castle and fetch Lord Mulberry and the Lord Bors so they may be brought to justice!”.  This led to a furore in the hall which took a mighty toll on Inspector Phillip.`;
const pattern = /\b(?<=Sir\s)\w+/gim;

(() => {
  const inputBoxes = paragraph.replace(
    pattern,
    "<input type='text' placeholder='Type in a name'>"
  );
  contentBoxSel.innerHTML = inputBoxes;
})();
