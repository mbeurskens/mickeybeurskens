"use strict";
function getNewSummary() {
    /**
     *  Get a new summary block.
     *
     *  @return div containing summary.
     */
    var div = document.createElement("div");
    var title = document.createElement("h3");
    var title_text = document.createTextNode("Header");
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
    var textBox = document.createElement("div");
    textBox.className = "recent-post-box-text";
    // Text box title, subtitle and getNewSummary
    var title = document.createElement("h2");
    title.className = "recent-post-box-title";
    var subTitle = document.createElement("h3");
    subTitle.className = "recent-post-box-sub-title";
    var summaryTitle = document.createElement("p");
    summaryTitle.className = "recent-post-box-summary";
    // Debug
    var ttext = document.createTextNode("Debug");
    var subttext = document.createTextNode("Debug");
    var sumtext = document.createTextNode("Debug");
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
    var div = document.createElement("div");
    // Set image data
    var img = document.createElement("img");
    img.src = "images/banner.jpg";
    img.className = "recent-post-box-img";
    div.appendChild(img);
    div.appendChild(getNewRecentPostTextBox());
    div.className = "recent-post-box";
    return div;
}
function createHomeHighlights() {
    /**
     *  Create highlights on the home page.
     */
    var summaries = 3;
    var sumDiv = document.getElementById('home-highlights');
    for (var sum = 0; sum < summaries; sum++) {
        sumDiv.appendChild(getNewSummary());
    }
}
function createRecentPosts() {
    /**
     *  Create highlights on the home page.
     */
    var summaries = 3;
    var sumDiv = document.getElementById('home-recent-posts');
    for (var sum = 0; sum < summaries; sum++) {
        sumDiv.appendChild(getNewRecentPost());
    }
}
createHomeHighlights();
createRecentPosts();
//# sourceMappingURL=main.js.map
