const images = [
  
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];

let currentImageIndex = 0;

function showImage() {
  document.getElementById("carousel").src = images[currentImageIndex];
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage();
}
