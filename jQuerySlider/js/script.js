$(document).ready(function() {

// set options
var speed = 500;    //fade speed in ms
var autoloop = true; //auto slider on/off
var autoloop_speed = 1000; //auto slide speed in ms
var run;

  //add initial class
  $('.slide').first().addClass('active');

  //hide all slides
  $('.slide').hide();

  //show first slide
  $('.active').show();

  //click handler
  $('#next').click(nextSlide);
  $('#prev').click(prevSlide);

  $('#toggle').click(function() {

    if (autoloop) {
      run = setInterval(function() {
        nextSlide() }, autoloop_speed);
      autoloop = false;
    } else {
      window.clearInterval(run);
      autoloop = true;
    };
  });

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
});
