"use strict"


function getNewSummary() {
  /**
   *  Get a new summary block.
   *
   *  @return div containing summary.
   */
  const div = document.createElement("div");
  const title = document.createElement("h3");
  const title_text = document.createTextNode("Header");

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
  const textBox = document.createElement("div");
  textBox.className = "recent-post-box-text";

  // Text box title, subtitle and getNewSummary
  const title = document.createElement("h2");
  title.className = "recent-post-box-title";
  const subTitle = document.createElement("h3");
  subTitle.className = "recent-post-box-sub-title";
  const summaryTitle = document.createElement("p");
  summaryTitle.className = "recent-post-box-summary";

  // Debug
  const ttext = document.createTextNode("Debug");
  const subttext = document.createTextNode("Debug");
  const sumtext = document.createTextNode("Debug");
  title.appendChild(ttext);
  subTitle.appendChild(subttext);
  summaryTitle.appendChild(sumtext);

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
  const img = document.createElement("img");
  img.src = "src/images/banner.jpg";
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
  const summaries = 3;
  const sumDiv = document.getElementById('home-highlights');

  if (sumDiv) {
    for (let sum = 0; sum < summaries; sum++) {
      sumDiv.appendChild(getNewSummary());
    }
  }
}

function createRecentPosts() {
  /**
   *  Create highlights on the home page.
   */
  const summaries = 3;
  const sumDiv = document.getElementById('home-recent-posts');

  if (sumDiv) {
    for (let sum = 0; sum < summaries; sum++) {
      sumDiv.appendChild(getNewRecentPost());
    }
  }
}

createHomeHighlights();
createRecentPosts();
