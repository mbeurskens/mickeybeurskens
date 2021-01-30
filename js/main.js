"use strict"


function getNewSummary() {
  /**
   *  Get a new summary block.
   *
   *  @return div containing summary.
   */
  const div = document.createElement("div")
  let title = document.createElement("h3");
  let title_text = document.createTextNode("Header");

  title.appendChild(title_text);
  div.appendChild(title)
  div.className = "highlight-box"
  return div;
}

function getNewRecentPost() {
  /**
   *  Return new div for a recent post summary.
   *
   *  @return div containing recent post summary.
   */

   const div = document.createElement("div")
    let title = document.createElement("h3");
    let title_text = document.createTextNode("Header");

    title.appendChild(title_text);
    div.appendChild(title)
    div.className = "recent-post-box"
    return div;
}

function createHomeHighlights() {
  let summaries = 3;
  let sumDiv = document.getElementById('home-highlights');

  for (let sum = 0; sum < summaries; sum++) {
    sumDiv.appendChild(getNewSummary());
  }
}

function createRecentPosts() {
  let summaries = 3;
  let sumDiv = document.getElementById('home-recent-posts');

  for (let sum = 0; sum < summaries; sum++) {
    sumDiv.appendChild(getNewRecentPost());
  }
}

createHomeHighlights();
createRecentPosts();
