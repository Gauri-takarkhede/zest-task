$(".slide-one").delay(200).addClass("active");
//$('.slide-one h2').animate({
//opacity: 0,
//top: '-400px',
//opacity: 1,
//top: '20px',

//}, 4000, function() {
// Animation complete.
//});

$(".slide-one, .slide-two, .slide-three, .slide-four, .slide-five").hide();

var slides = $("ul li.slide"),
  i = 0;

$(slides[0]).show();
(function loop() {
  slides
    .delay(3000)
    .fadeOut("slow")
    .eq(++i % slides.length)
    .fadeIn("slow", function () {
      console.log($(this));
      $(this).addClass("active").siblings().removeClass("active");
      if ($(".slide").hasClass("active")) {
      }
      loop();
    });
})();
