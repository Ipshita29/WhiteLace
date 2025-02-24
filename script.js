let slideIndex = 0;
const slides = document.querySelectorAll(".banner");

function showSlides() {
    slides.forEach(slide => slide.style.display = "none"); // Hide all slides
    slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide
    slides[slideIndex].style.display = "block"; // Show the current slide
}

setInterval(showSlides, 5000); // Auto-change every 3 seconds
showSlides(); // Show the first slide immediately
