$('.news-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev slick-prev-news"/>`,
    nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next slick-next-news"/>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev slick-prev-videos"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next slick-next-videos"/>`,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev slick-prev-videos"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next slick-next-videos"/>`,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev" slick-prev-videos/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next slick-next-videos"/>`,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev slick-prev-videos"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next slick-next-videos"/>`,
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev slick-prev-videos"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next slick-next-videos"/>`,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})