$(document).ready(function () {
  var $clickMe = $(".click-icon"),
    $card = $(".card");

  $card.on("click", function () {
    $(this).addClass("is-opened");
    $clickMe.addClass("is-hidden");
  });

  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    centerMode: true,
    variableWidth: true,
    asNavFor: ".slider-for",
    swipe: false,
    draggable: false,
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    centerMode: true,
    variableWidth: true,
    asNavFor: ".slider",
    swipe: false,
    draggable: false,
  });
});
