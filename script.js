const clickMeButton = document.getElementById('clickMeButton');
const trumpImage = document.getElementById('trumpImage');

clickMeButton.addEventListener('click', () => {
  // Hide the button
  clickMeButton.classList.add('hidden');
  
  // Show the Trump image
  trumpImage.classList.remove('hidden');
});