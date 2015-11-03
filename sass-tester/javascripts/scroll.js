//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.scroller').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - parseInt($("nav.navbar-fixed-top").css('margin-bottom')) - $("nav.navbar-fixed-top").outerHeight()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});