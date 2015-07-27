$(document).ready(function(){

  // set options
  var speed = 500;    //fade speed in ms
  var autoloop = false; //auto slider on/off
  var autoloop_speed = 5000; //auto slide speed in ms

  //add initial class
  $('.slide').first().addClass('active');

  //hide all slides
  $('.slide').hide();

  //show first slide
  $('.active').show();

  //click handler
  $('#next').click(nextSlide);
  $('#prev').click(prevSlide);

  //autoloop slides
  if (autoloop === true){
    setInterval(nextSlide);

    //switch to next slide
    function nextSlide() {
      $('.active').removeClass('active').addClass('oldActive');
      if ($('.oldActive').is(':last-child')) {
        $('.slide').first().addClass('active');
      } else {
        $('.oldActive').next().addClass("active");
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    };

    //switch to previous slide
    function prevSlide() {
      $('.active').removeClass('active').addClass('oldActive');
      if ($('.oldActive').is(':first-child')) {
        $('.slide').last().addClass('active');
      } else {
        $('.oldActive').prev().addClass("active");
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut(speed);
      $('.active').fadeIn(speed);
    };
  };
});
