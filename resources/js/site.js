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

// jQuery(function($) {
//     // Initialize Isotope on the .projects container
//     var $grid = $('.projects').isotope({
//         itemSelector: ".grid-item",
//         filter: "*",
//         layoutMode: 'fitRows' // You can use 'masonry' if preferred
//     });

//     // Add filter event to categories links
//     $('.categories a').on("click", function(e) {
//         e.preventDefault(); // Prevent default link behavior
//         var selector = $(this).attr('data-filter');
        
//         // Filter projects
//         $grid.isotope({ filter: selector });

//         // Change active class on click
//         $('a.active-category').removeClass('active-category');
//         $(this).addClass('active-category');

//         // Trigger layout after filtering
//         $grid.isotope('layout');
//     });
// });
