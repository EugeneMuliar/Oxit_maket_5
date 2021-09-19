(function () {
  "use strict";

  $(document).ready(function () {
    $(".slider").slick({
      // autoplay
      arrows: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      rows: 0,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            rows: 0,
          },
        },
      ],
    });

    var show_lines = document.getElementById("lines__menu");
    var lines_button = document.getElementById("lines-button");
    show_lines.style.opacity = "0";
    lines_button.addEventListener("click", function () {
      if (show_lines.style.opacity == "0") {
        show_lines.style.opacity = "1";
      } else {
        show_lines.style.opacity = "0";
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 765) {
        show_lines.style.opacity = "0";
      }
    });
  });
})();
