$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
    nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
});