// Get a reference to the video container and the hero container
const videoContainer = document.querySelector('.background');
const bannerContainer = document.querySelector('.text-banner');
const bannerContainer2 = document.querySelector('.text-banner-2');
const bannerContainer3 = document.querySelector('.text-banner-3');

// Define the parallax effect function
function parallax() {
    // Calculate the scroll position
    const scrollPosition = window.scrollY;

    // Apply the parallax effect to the video container
    videoContainer.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
    bannerContainer.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    bannerContainer2.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    bannerContainer3.style.transform = `translateY(${scrollPosition * 0.055}px)`;
    //bannerContainer.style.transform = `translateY(-${scrollPosition * 0.5}px)`;

    // You can adjust the factor (0.5 in this example) to control the parallax speed
}

// Add an event listener to the window to call the parallax function on scroll
window.addEventListener('scroll', parallax);
