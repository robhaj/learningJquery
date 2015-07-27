$(document).ready(function(){
    // set options
    var speed = 500;    //fade speed in ms
    var autoloop = true; //auto slider on/off
    var autoloop_speed = 5000; //auto slide speed in ms

      //add initial class
      $('.slide').first().addClass('active');

      //hide all slides
      $('.slide').hide();

      //show first slide
      $('.active').show();

      $('#next').click(function() {
      $('.active').removeClass('active').addClass('oldActive');
      if ($('.oldActive').is(':last-child')) {
        $('.slide').first().addClass('active');
      } else {
        $('.oldActive').next().addClass("active");
      }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
      });

      $('#prev').click(function() {
      $('.active').removeClass('active').addClass('oldActive');
      if ($('.oldActive').is(':first-child')) {
        $('.slide').last().addClass('active');
      } else {
        $('.oldActive').prev().addClass("active");
      }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
      });

      if (autoloop === true){
            setInterval(function() {
              $('.active').removeClass('active').addClass('oldActive');
              if ($('.oldActive').is(':last-child')) {
                $('.slide').first().addClass('active');
              } else {
                $('.oldActive').next().addClass("active");
              }
                $('.oldActive').removeClass('oldActive');
                $('.slide').fadeOut(autoloop_speed);
                $('.active').fadeIn(autoloop_speed);
              });

      }


});
