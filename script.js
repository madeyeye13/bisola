// JavaScript to handle menu open and close functionality
document.getElementById("menuIcon").addEventListener("click", function () {
    document.getElementById("navigation").classList.add("open");
  });
  
  document.getElementById("closeIcon").addEventListener("click", function () {
    document.getElementById("navigation").classList.remove("open");
  });
  
  // Add background to header on scroll
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


  // Add background to header on scroll Desktop
  window.addEventListener("scroll", function () {
    const header = document.getElementById("heading");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  



  ///////FOR HEROSECTION

  
 // Wait for the page to load, then start a 1-second delay before playing the video
window.addEventListener("load", () => {
  const heroVideo = document.getElementById("heroVideo");
  const thumbnailOverlay = document.getElementById("thumbnailOverlay");

  // Start a 1-second timeout to play the video
  setTimeout(() => {
      thumbnailOverlay.style.display = "none"; // Hide the thumbnail
      heroVideo.play(); // Start the video
  }, 1000); // 1 second

  // Add a timeupdate event listener to the video
  heroVideo.addEventListener("timeupdate", () => {
      // Check if the current time has reached or exceeded 1 minute, 5 seconds
      if (heroVideo.currentTime >= 61) {
          heroVideo.currentTime = 0; // Reset the video to the beginning
          heroVideo.play(); // Replay the video
      }
  });
});



/////FOR INTRO 


document.addEventListener('DOMContentLoaded', () => {
  const h2Element = document.querySelector('.int h2');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementTop = h2Element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      h2Element.classList.add('reveal');
      window.removeEventListener('scroll', revealOnScroll); // Remove listener after revealing
    }
  }

  window.addEventListener('scroll', revealOnScroll);
});



document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function nextSlide() {
      // Remove active class from current slide
      slides[currentSlide].classList.remove('active');
      
      // Move to next slide
      currentSlide = (currentSlide + 1) % slides.length;
      
      // Add flash effect and active class to new slide
      slides[currentSlide].classList.add('active', 'flash');
      
      // Remove flash class after animation completes
      setTimeout(() => {
          slides[currentSlide].classList.remove('flash');
      }, 500);
  }

  // Start the slideshow
  setInterval(nextSlide, 6000);
});
