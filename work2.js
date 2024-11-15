// Toggle the visibility of the hamburger menu
function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu

  // Prevent horizontal scroll when the menu is active
  if (menu.classList.contains('active')) {
    document.body.style.overflowX = 'hidden'; // Hide horizontal scroll when menu is open
  } else {
    document.body.style.overflowX = 'auto'; // Show scroll when menu is closed
  }
}

// Get all images with the 'floating-image' classes
const floatingImages = document.querySelectorAll('.floating-image, .floating-image2, .floating-image3, .floating-image4, .floating-image5, .floating-image6');

// Add event listeners for mouse hover to toggle animation for each image
floatingImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('paused'); // Add the 'paused' class on hover to stop the animation
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('paused'); // Remove the 'paused' class when hover ends to resume the animation
  });
});


