$(document).foundation()
$(document).ready(function(){
    var lastScrollTop = 0;
    $(window).on('scroll', function(event){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
            // downscroll code
            $('.row').each( function(i){

                var top_of_object = $(this).offset().top;
                var top_of_window = $(window).scrollTop();

                /* If the object is completely visible in the window, fade it it */
                if( top_of_window > top_of_object + 140 ) {
                    console.log("hide");
                    $(this).stop().animate({'opacity':0},1500);
                }

            });
        } else if (st < lastScrollTop) {
            $('#video').stop().css({opacity: 1});
            $('.row').each( function(i) {
                // var top_of_object = $(this).offset().top;
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var top_of_window = $(window).scrollTop();

                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_object > top_of_window ) {

                    $(this).stop().animate({'opacity':1},500);
                }
            });
        }
        lastScrollTop = st;
    });

});

/*
jQuery.fn.isFullyVisible = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var elemtHeight = this.height(); // Get the full height of current element
    elemtHeight = Math.round(elemtHeight); // Round it to whole humber

    var bounds = this.offset(); // Coordinates of current element
    bounds.top = bounds.top + elemtHeight; // Top is redefined as half of current element's height
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}

jQuery.fn.isOnScreen = function () {

    var win = $(window);

    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var elemtHeight = this.height() / 2; // Get half of the height of current element
    elemtHeight = Math.round(elemtHeight); // Round it to whole humber

    var bounds = this.offset(); // Coordinates of current element
    bounds.top = bounds.top + elemtHeight; // Top is redefined as half of current element's height
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

}
*/