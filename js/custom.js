// Get the header
var header = document.getElementById("sticky-header");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add sticky class to header when you scroll past it
function stickyHeader() {
  if (window.scrollY > sticky) {
    header.classList.add("is-sticky");
  } else {
    header.classList.remove("is-sticky");
  }
}

// Scroll to section
$(document).ready(function() {
    // Function to handle smooth scrolling
    function scrollToSection(sectionID) {
      $('html, body').animate({
        scrollTop: $(sectionID).offset().top - 70
      }, 1000); // Smooth scroll to the target section
    }
  
    // Handling clicks on .scroll-link
    $('.scroll-link').click(function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Get the target section from the data attribute
      var targetSection = $(this).data('target');
  
      // Remove 'active' class from all scroll-link elements
      $('.scroll-link').removeClass('active');
      // Add 'active' class to the clicked element
      $(this).addClass('active');
  
      // If already on the home page
      if (window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
        // Scroll smoothly to the section on the same page
        scrollToSection(targetSection);
      } else {
        // If on a different page, store the target section and redirect
        localStorage.setItem('scrollTarget', targetSection);
        window.location.href = '/projects/cribbage/'; // Redirect to home page
      }
    });
  
    // On page load, check if a section is stored in localStorage for scrolling
    var storedSection = localStorage.getItem('scrollTarget');
    if (storedSection) {
      // Scroll to the stored section
      scrollToSection(storedSection);
      // Clear the stored section after scrolling
      localStorage.removeItem('scrollTarget');
    }
  });
  

 
// Sticky Header
window.onscroll = function() {
  stickyHeader();
};

// Mobile Menu
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('sticky-header').classList.toggle('mobileMenu-show');  // Toggle class on click
});
  

// Hero Slider
var swiperHero = new Swiper('.hero-slider', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 30, 
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
});
    
// Second Swiper (Quick View Slider)
var swiperQuickView = new Swiper('#quick-view-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper2-next',  // Use navigation instead of nextButton/prevButton
        prevEl: '.swiper2-prev',
    },
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {        
        1920: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1028: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
});


// Thrid Swiper (Testimonial Slider)
var swiperTestimonial = new Swiper('#testimonial-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper3-next',  // Use navigation instead of nextButton/prevButton
        prevEl: '.swiper3-prev',
    },
    slidesPerView: 3, 
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1028: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
});