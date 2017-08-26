console.log('\'Allo \'Allo!');

function windowH() {
    var wH = $(window).height();

    $('.main-bg').css({height: wH});
    $('.main').css({height: wH});
    $('.face-shot').css({height: wH});
}

windowH();
