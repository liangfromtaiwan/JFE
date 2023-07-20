/**
 * @Author: Your name
 * @Date:   2023-06-05 17:10:08
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-06-06 13:45:00
 */

$(document).ready(function () {
  // hamburger
  $(".hamburger").click(function (e) {
    e.preventDefault();
    $(".hamburger").toggleClass("active");
    $(".header__inner").toggleClass("active");
  });

  //header
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 60) {
      $("#js-nav").addClass("bgWhite");
    } else {
      $("#js-nav").removeClass("bgWhite");
    }
  });

  // top
  $(".top").click(function (e) {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 500);
  });
});

