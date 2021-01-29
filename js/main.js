"use strict"


function getNewSummary() {
  const div = document.createElement("div")
  let title = document.createElement("h3");
  let title_text = document.createTextNode("Header");

  title.appendChild(title_text);
  div.appendChild(title)
  return div;
}

function createHomeSummary(id) {
  id.appendChild(getNewSummary());
}

function createHomeSummaries() {
  let summaries = [document.getElementById('home-sum-1'),
    document.getElementById('home-sum-2'),
    document.getElementById('home-sum-3')];

  for (let sum of summaries ) {
    createHomeSummary(sum);
  }
}

createHomeSummaries();
