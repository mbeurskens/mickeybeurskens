"use strict"


function getNewSummary() {
  /**
   *  Get a new summary block.
   *
   *  @return div containing summary.
   */
  const div = document.createElement("div");
  let title = document.createElement("h3");
  let title_text = document.createTextNode("Header");

  title.appendChild(title_text);
  div.appendChild(title);
  div.className = "highlight-box";
  return div;
}

function getNewRecentPostTextBox() {
  /**
   *  Get a new text box for recent posts.
   *
   *  @return div containing text box.
   */
  let textBox = document.createElement("div");
  textBox.className = "recent-post-box-text";

  // Text box title, subtitle and getNewSummary
  let title = document.createElement("h2");
  title.className = "recent-post-box-title";
  let subTitle = document.createElement("h3");
  title.className = "recent-post-box-sub-title";
  let summaryTitle = document.createElement("p");
  summaryTitle.className = "recent-post-box-summary";

  // Create text text
  textBox.appendChild(title);
  textBox.appendChild(subTitle);
  textBox.appendChild(summaryTitle);

  return textBox;
}

function getNewRecentPost() {
  /**
   *  Return new div for a recent post summary.
   *
   *  @return div containing recent post summary.
   */
  const div = document.createElement("div");

  // Set image data
  let img = document.createElement("img");
  img.src = "images/banner.jpg";
  img.className = "recent-post-box-img"

  div.appendChild(img);
  div.appendChild(getNewRecentPostTextBox());
  div.className = "recent-post-box";
  return div;
}

function createHomeHighlights() {
  /**
   *  Create highlights on the home page.
   */
  let summaries = 3;
  let sumDiv = document.getElementById('home-highlights');

  for (let sum = 0; sum < summaries; sum++) {
    sumDiv.appendChild(getNewSummary());
  }
}

function createRecentPosts() {
  /**
   *  Create highlights on the home page.
   */
  let summaries = 3;
  let sumDiv = document.getElementById('home-recent-posts');

  for (let sum = 0; sum < summaries; sum++) {
    sumDiv.appendChild(getNewRecentPost());
  }
}

createHomeHighlights();
createRecentPosts();
