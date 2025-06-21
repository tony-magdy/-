// STEP 1: Image array
const images = [
  './assets/image-content/image-1.png',
  './assets/image-content/image-2.png',
  './assets/image-content/image-3.png',
  './assets/image-content/image-4.png',
  './assets/image-content/image-5.png',
  './assets/image-content/image-6.png'
];

// STEP 2: References
const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const finalMessage = document.querySelector('.final-message');

// STEP 3: Image index tracking
let currentIndex = 0;

// STEP 4: Image update
function updateImage() {
  imageContent.style.opacity = 0;
  const img = new Image();
  img.src = images[currentIndex];
  img.onload = () => {
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    imageContent.style.opacity = 1;
  };
}

// STEP 5: First image
updateImage();

// STEP 6: Button handler
mainButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < images.length) {
    updateImage();
  }
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});

// STEP 7: Video play + unmute on click
window.addEventListener('load', () => {
  const video = document.getElementById('bg-video');
  video.play().catch(err => {
    console.warn('Autoplay failed:', err);
  });

  // Unmute when user clicks anywhere
  const unmute = () => {
    video.muted = false;
    video.play();
    document.removeEventListener('click', unmute);
  };
  document.addEventListener('click', unmute);
});
