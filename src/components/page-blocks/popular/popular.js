$('.popular').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
    nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: `<img src='../../img/arrow-left.svg' class="slick-prev"/>`,
            nextArrow: `<img src='../../img/arrow-right.svg' class="slick-next"/>`,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})