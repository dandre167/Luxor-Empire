window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 0) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }
});

// Add functionality to scroll horizontally when hovering over the image container

var scrollWrappers = document.querySelectorAll('.scroll-wrapper');
scrollWrappers.forEach(function(wrapper) {
  wrapper.addEventListener('mousemove', function(event) {
    var scrollContent = this.querySelector('.scroll-content');
    var containerWidth = this.offsetWidth;
    var contentWidth = scrollContent.offsetWidth;
    var scrollX = event.pageX - this.offsetLeft;
    var maxScroll = contentWidth - containerWidth;

    var scrollAmount = (scrollX / containerWidth) * maxScroll;
    scrollContent.style.transform = 'translateX(-' + scrollAmount + 'px)';
  });
});


function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}



/* Banner JS */

const bannerContainer = document.querySelector('.banner-container');
const bannerContent = document.querySelector('.banner-content');
const bannerItems = bannerContent.querySelectorAll('.banner-item');

const currentImageIndex = 0;

const infiniteBanner = () => {
  // Get the next image index.
  currentImageIndex = (currentImageIndex + 1) % bannerItems.length;

  // Set the active image.
  bannerContent.style.transform = `translateX(-${currentImageIndex * 100}px)`;

  // Check if the current image is the last image.
  if (currentImageIndex === bannerItems.length - 2) {
    // If it is, set the `transform` property to 0 to reset the banner.
    bannerContent.style.transform = 'translateX(0)';
  }
};

// Start the infinite banner.
setInterval(infiniteBanner, 3000);



    // Add this JavaScript code to your script.js file or embed it in a tag

    document.addEventListener('DOMContentLoaded', function() {
      var dropdownHeaders = document.querySelectorAll('.dropdown-header');
    
      dropdownHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
          this.parentNode.classList.toggle('open');
        });
      });
    });

    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('nav');
      var jumbotron = document.querySelector('.jumbotron');
      
      // Get the height of the jumbotron
      var jumbotronHeight = jumbotron.offsetHeight;
      
      // Check if the user has scrolled beyond the jumbotron
      if (window.scrollY >= jumbotronHeight) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    });
    

//for the form on the inqquire page

    // Your JavaScript code for handling the checkbox and showing insurance details
const insuranceCheckbox = document.getElementById('insurance-checkbox');
const insuranceDetails = document.getElementById('insurance-details');

insuranceCheckbox.addEventListener('change', function () {
  if (this.checked) {
    insuranceDetails.style.display = 'block';
  } else {
    insuranceDetails.style.display = 'none';
  }
});

// Your code for handling form submission and validation if needed
const registrationForm = document.getElementById('registration-form');

registrationForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // Add your form submission logic here
});
