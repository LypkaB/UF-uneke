$(document).ready(function() {
    $('.products-slider').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dots: true,
        dotsClass: 'slider-dots',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    centerMode: false
                }
            }
        ]
    })
});
