'use strict';

function isBreakpoint( alias ) {
  return $('.device-' + alias).is(':visible');
}

function windowH() {
    var wH = $(window).height();

    $('.main-bg').css({height: wH});
    $('.main').css({height: wH});
    $('.face-shot').css({height: wH});

    if ( !isBreakpoint('xs') ) {
      var contactHeight = $('.form-container').css('min-height');
      $('.contact-main-bg').css({height: contactHeight});
      $('.korea-photo').css({height: contactHeight});
      $('.img-form-container').css({height: contactHeight});
    } else {
      var mH = '700px';
      $('.main-bg').css({height: mH});
      $('.main').css({height: mH});
      $('.face-shot').css({height: mH});

      $('.contact-main-bg').css({height: mH});
      $('.form-container').css({width: '100%'});
    }
}

function onContact() {
  $('.contact').get(0).scrollIntoView();
}

$(window).resize(function () {
  windowH();
});

windowH();
