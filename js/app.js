$(function() {

  var still = $('.ryu-still');
  var ready = $('.ryu-ready');
  var throwing = $('.ryu-throwing');
  var hadouken = $('.hadouken');
  var cool = $('.ryu-cool');
  intro();
  $('.ryu').mouseenter(function() {
    still.hide();
    ready.show();
  })
  .mouseleave(function() {
    ready.hide();
    still.show();
  })
  .mousedown(function() {
    playHadouken();
    ready.hide();
    throwing.show();
    hadouken.finish().show().animate(
      {'left': '100vw'},
      700,
      function() {
        $(this).hide();
        $(this).css('left', '590px');
      });
  })
  .mouseup(function() {
    throwing.hide();
    ready.show();
  });

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

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function intro() {
  var fadeTime = 800
  glitterSound();
  $('.sf-logo').fadeIn(fadeTime).delay(fadeTime).fadeOut(fadeTime, function() {
    $('.jq-logo').fadeIn(fadeTime).delay(fadeTime).fadeOut(fadeTime, function() {
      $('.instructions').fadeIn(fadeTime);
      startMusic();
    });
  });
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
