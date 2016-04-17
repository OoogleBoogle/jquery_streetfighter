
function intro() {
  var fadeTime = 800 // save fade time to keep consistent and speed up tweeking
  glitterSound();
  $('.sf-logo').fadeIn(fadeTime).delay(fadeTime).fadeOut(fadeTime, function() {
    $('.jq-logo').fadeIn(fadeTime).delay(fadeTime).fadeOut(fadeTime, function() {
      $('.instructions').fadeIn(fadeTime).delay(fadeTime).fadeOut(fadeTime, function() {
        $('.ryu-angry').fadeIn(fadeTime);
      });
      startMusic();
    });
  });
}

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function glitterSound() {
  $('#glitter')[0].volume = 0.4;
  $('#glitter')[0].load();
  $('#glitter')[0].play();
}

function startMusic() {
  $('#start-music')[0].volume = 0.6;
  $('#start-music')[0].load();
  $('#start-music')[0].play();
}

$(function() {
  intro();
  // cache references to images;
  var still = $('.ryu-still'),
      ready = $('.ryu-ready'),
      throwing = $('.ryu-throwing'),
      hadouken = $('.hadouken'),
      cool = $('.ryu-cool');
  
  // on mouse enter
  $('.ryu, .ryu-angry').mouseenter(function() { 
    $(this).find(still).hide();
    $(this).find(ready).show();
  })
  // on mouse leave
  .mouseleave(function() {
    $(this).find(ready).hide();
    $(this).find(still).show();
  })
  // on mouse click
  .mousedown(function() {
    playHadouken();
    $(this).find(ready).hide();
    $(this).find(throwing).show();
    $(this).find(hadouken).finish().show().animate({
      'left': '100vw'
    }, 700, 
    function() {
      $(this).hide();
      $(this).css('left', '590px');
    });
  // relese mouse button
  })
  .mouseup(function() {
    $(this).find(throwing).hide();
    $(this).find(ready).show();
  });

  // when pressing the X key
  $(document).keypress(function(event) {
    if (event.which === 120) {
      ready.hide();
      still.hide();
      cool.show();
    };
  })
  .keyup(function() {
    cool.hide();
    ready.show();
  });
});


