// Get a reference to the video container and the hero container
const videoContainer = document.querySelector('.background');

// Define the parallax effect function
function parallax() {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Apply the parallax effect to the video container
    videoContainer.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
    //bannerContainer.style.transform = `translateY(-${scrollPosition * 0.5}px)`;

    // You can adjust the factor (0.5 in this example) to control the parallax speed
}

// Add an event listener to the window to call the parallax function on scroll
window.addEventListener('scroll', parallax);
