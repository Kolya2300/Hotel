$(function(){
    $('.review__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-prev"><img src="img/arrow_prev.svg"></button>',
        nextArrow: '<button type="button" class="arrow-next"><img src="img/arrow_next.svg"></button>',
        responsive: [
            {
                breakpoint: 965,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
});