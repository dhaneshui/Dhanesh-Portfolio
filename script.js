const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


  const cursor = document.querySelector('.custom-cursor');

  window.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });



// Reveal h3 from bottom
ScrollReveal().reveal(".section__container h3", {
    ...scrollRevealOption,
});

// Reveal h2 from left with delay
ScrollReveal().reveal(".section__container h2", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});
ScrollReveal().reveal(".section__container button", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});
ScrollReveal().reveal(".nav__links li", {
    ...scrollRevealOption,
    
    origin: "top",
    interval:300,
    delay: 2000,
});
console.log("JavaScript file loaded successfully!");
console.log(ScrollReveal); // Check if ScrollReveal is available
// Get the logo element
const logoElement = document.querySelector(".flash");

// List of logos
const logo = [
  "assests/logo.png",       // Default logo
  "assests/homelogo2.png",  // Second logo
  "assests/homelogo3.png"   // Third logo
];

// Change logo randomly every 2 seconds
setInterval(() => {
  logoElement.style.opacity = 1; // fade out

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * logos.length);
    logoElement.src = logos[randomIndex];
    logoElement.style.opacity = 1; // fade in
  }, 500); // after fade out
}, 2000); // Change logo every 2 seconds

  // Get the logos
const logos = [
  document.getElementById('logo1'),
  document.getElementById('logo2'),
  document.getElementById('logo3')
];

// Function to show each logo with a gap
function showLogosSequentially() {
  let index = 0; // To track which logo to show

  // Show the logos one by one with delay
  setInterval(() => {
    // Hide all logos
    logos.forEach(logo => {
      logo.style.opacity = 0;
    });

    // Show the current logo
    logos[index].style.opacity = 1;

    // Update the index for the next logo, and loop back after the last one
    index = (index + 1) % logos.length;
  }, 3000);  // Change logo every 3 seconds
}

// Start the logo display sequence when the page loads
window.onload = showLogosSequentially;
// ScrollReveal animation for the Resume section
ScrollReveal().reveal('.resume-content', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 300,
  easing: 'ease-out',
  reset: false
});



// Optional: Add click or hover effects via JS
const images = document.querySelectorAll('.image-container');

images.forEach(img => {
  img.addEventListener('click', () => {
    alert('Image clicked!');
  });
});

const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");

let scrollOne = 0;
let scrollTwo = 0;

window.addEventListener("wheel", (e) => {
  scrollOne += e.deltaY;
  scrollTwo -= e.deltaY * 0.5; // slower movement for the second line

  const maxOne = lineOne.scrollWidth - window.innerWidth;
  const maxTwo = lineTwo.scrollWidth - window.innerWidth;

  scrollOne = Math.max(0, Math.min(scrollOne, maxOne));
  scrollTwo = Math.max(0, Math.min(scrollTwo, maxTwo));

  lineOne.style.transform = `translateX(-${scrollOne}px)`;
  lineTwo.style.transform = `translateX(-${scrollTwo}px)`;
});


// Active nav link on scroll
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".nav__links .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const nameOverlay = document.getElementById('nameOverlay');
  
  // Initial opacity for name overlay
  nameOverlay.style.opacity = '1';
  
  // Handle scroll effect
  window.addEventListener('scroll', function() {
      // Calculate scroll percentage (0 to 1)
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = 1 - Math.min(scrollPosition / (windowHeight * 0.5), 1);
      
      // Apply opacity to name overlay
      nameOverlay.style.opacity = opacity;
      
      // Hide completely when opacity reaches 0
      if (opacity <= 0) {
          nameOverlay.style.display = 'none';
      } else {
          nameOverlay.style.display = 'block';
      }
  });
  
  // Learn more button hover effect
  const learnMoreBtn = document.querySelector('.learn-more-btn');
  if (learnMoreBtn) {
      learnMoreBtn.addEventListener('mouseenter', function() {
          this.querySelector('i').style.transform = 'translateX(3px)';
      });
      
      learnMoreBtn.addEventListener('mouseleave', function() {
          this.querySelector('i').style.transform = 'translateX(0)';
      });
  }
});