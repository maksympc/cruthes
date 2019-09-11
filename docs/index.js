$('.review-cards').slick({
  slidesToShow: 4,
  infinite: true,
  arrows:false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        autoplayspeed: 3000,
        cssEase:'ease-in',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplayspeed: 3000,
        cssEase:'ease-in',
      }
    }
  ]
});
