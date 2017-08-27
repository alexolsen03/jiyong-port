console.log('\'Allo \'Allo!');

function windowH() {
    var wH = $(window).height();

    $('.main-bg').css({height: wH});
    $('.main').css({height: wH});
    $('.face-shot').css({height: wH});

    var contactHeight = $('.form-container').css('min-height');
    var contactRight = $('.form-container').css('right');

    $('.contact-main-bg').css({height: contactHeight});
    $('.korea-photo').css({height: contactHeight});
    $('.img-form-container').css({height: contactHeight});
}

function onContact() {
  console.log('on contact...');
  $(".contact").get(0).scrollIntoView();
}

windowH();
