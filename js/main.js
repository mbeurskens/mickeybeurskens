"use strict"

function createHomeSummary(id) {
  let par = document.createElement("p");
  let text = document.createTextNode("Test text");
  par.appendChild(text);
  id.appendChild(par);
}

function createHomeSummaries() {
  let summaries = [document.getElementById('home-sum-1'),
    document.getElementById('home-sum-2'),
    document.getElementById('home-sum-3')];

  for (let sum of summaries ) {
    createHomeSummary(sum);
  }

  createHomeSummary(sum1);
}

createHomeSummaries();
