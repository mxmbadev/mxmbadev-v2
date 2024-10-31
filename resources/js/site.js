// Import jQuery
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery; // Make jQuery available globally if necessary
// Import Bootstrap (assuming you are using the whole Bootstrap library)
import 'bootstrap';
// Import Isotope and jQuery Bridget
import Isotope from 'isotope-layout';
import 'jquery-bridget';

// Attach jQuery Bridget to jQuery
import jQueryBridget from 'jquery-bridget';
jQueryBridget('isotope', Isotope, jQuery);

jQuery(function($) {
    // Initialize Isotope on the .projects container
    $('.projects').isotope({
        itemSelector: ".grid-item",
        filter: "*",
        layoutMode: 'fitRows' // You can use 'masonry' if preferred
    });

    // Add filter event to categories links
    $('.categories a').on("click", function(e) {
        e.preventDefault(); // Prevent default link behavior
        var selector = $(this).attr('data-filter');
        
        // Filter projects
        $('.projects').isotope({
            filter: selector,
        });

        // Change active class on click
        $('a.active-category').removeClass('active-category');
        $(this).addClass('active-category');
    });
});

// Rotating Word Effect on Homepage Hero
$(document).ready(function() {
    // Array of words to type
    var words = ["Designer", "Developer", "Photographer"];
    var index = 0;  // Track the current word index
    var charIndex = 0; // Track character index for typing
    var isDeleting = false; // Track whether we're typing or deleting
    var speed = 150; // Typing speed in milliseconds
    var delay = 2000; // Delay before typing the next word

    function typeEffect() {
        var currentWord = words[index];
        var currentDisplay = $(".looping-word").text();

        if (isDeleting) {
            // Delete one character at a time
            $(".looping-word").text(currentDisplay.slice(0, -1));
            if (currentDisplay.length === 0) {
                // When the word is completely deleted, move to the next word
                isDeleting = false;
                index = (index + 1) % words.length; // Move to the next word
            }
        } else {
            // Add one character at a time
            $(".looping-word").text(currentWord.slice(0, charIndex + 1));
            charIndex++;

            // If the entire word has been typed, start deleting after a delay
            if (charIndex === currentWord.length) {
                isDeleting = true;
                charIndex = 0; // Reset char index for typing next word
                setTimeout(typeEffect, delay);
                return;
            }
        }

        // Adjust typing speed
        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }

    // Start the typing effect
    typeEffect();
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
});
  
