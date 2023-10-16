(function ($, Drupal) {
  Drupal.behaviors.mySlickSlider = {
    attach: function (context, settings) {
      // Initialize Slick Slider on the wrapper element.
      $('.view-display-id-block_1 .view-content').slick({
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:
          '<span class="Slick-Prev arrow"><i class="fa-solid fa-chevron-left"></i></span>',
        nextArrow:
          '<span class="Slick-Next arrow"><i class="fa-solid fa-chevron-right"></i></span>',
      }),

      // Check if field_code or field_codename_team2 contains 'IND'
      $('.match_content--title:contains("IND")').each(function() {
        $(this).closest('.inside_container').find('.go_india').css('display', 'block');
      });
    }
  };
})(jQuery, Drupal);