var imageIndex = 0
var cardImage = document.getElementById('christmas-card-image');

function imageTimer() {
  imageIndex += 1
  if (imageIndex >= 10) {
    imageIndex = 0;
  }
  var imageNamePattern = "/img/christmas/Christmas_card_"
  var imageExtension = ".png"
  var sourceString =  imageNamePattern.concat(String(imageIndex), imageExtension)
  switchImage(sourceString)
}

function switchImage(imageSource) {
  cardImage.src = imageSource;
}

setInterval(imageTimer, 1000);
