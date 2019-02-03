var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});

(function($) {
    var $window = $(window),
        $nav = $('nav');

    $window.resize(function resize() {
        if ($window.width() < 992) {
            return $nav.addClass('mobile');
        }

        $nav.removeClass('mobile');
    }).trigger('resize');
})(jQuery);