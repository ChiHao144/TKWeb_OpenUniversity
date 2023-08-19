function showFullscreenImage(element) {
    var fullscreenImage = document.getElementById("fullscreen-image");
    var fullscreenImageImg = fullscreenImage.querySelector("img");
    fullscreenImageImg.src = element.src;
    fullscreenImage.style.display = "flex";
  }
  
  function closeFullscreenImage() {
    var fullscreenImage = document.getElementById("fullscreen-image");
    fullscreenImage.style.display = "none";
  }
  