// This is all you.
import 'bootstrap';

$(function(){
    var jQueryBridget = require('jquery-bridget');
    var Isotope = require('isotope-layout');
    
    jQueryBridget( 'isotope', Isotope, $ );
    
    $('.projects').isotope({
        itemSelector: ".grid-item",
        filter: "*"
    });
    
    $('.categories a').on("click", function(){
        var selector = $(this).attr('data-filter');
    
        $('.projects').isotope({
            filter: selector,
        })
    
        //changing active class with click event
        $('a.active-category').removeClass('active-category');
        $(this).addClass('active-category');
    });

})