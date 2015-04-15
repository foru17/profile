$.extend($.fn, {
    isOnScreenVisible: function() {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    }
});


var screenHeight = $(window).height();




$(document).ready(function() {
        $(".slide_list").onePageScroll({
            sectionContainer: ".slide_in_list",
            easing: "ease",
            animationTime: 700,
            pagination: false,
            updateURL: false,
            beforeMove: function(index) {
                console.log('向前滑' + index);
                // $('.finger_start').removeClass('fadeOutUp').addClass('fadeInDown')

            },
            afterMove: function(index) {
                console.log('向后滑' + index);
            },
            loop: false,
            keyboard: true,
            responsiveFallback: false
        });

})
