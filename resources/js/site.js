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
    // Array of words to loop through
    var words = ["Designer", "Developer", "Photographer"];
    var index = 0;  // Initialize index to track the current word
  
    // Function to loop through words
    function loopWord() {
      index = (index + 1) % words.length; // Move to the next word
      $(".looping-word").fadeOut(300, function() {
        $(this).text(words[index]).fadeIn(300);  // Update text with new word
      });
    }
  
    // Run the loop every 2 seconds
    setInterval(loopWord, 2000);
  });
  
