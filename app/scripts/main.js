'use strict';

function loading(el) {
  $(el).attr('class', 'btn btn-primary');
  $(el).html('<i class="fa fa-spin fa-spinner">');
  $(el).prop('disabled', true);
}

function doneLoading(el) {

  $(el).attr('class', 'btn btn-success');
  $(el).html('<i class="fa fa-check"></i> Sent');
  $(el).prop('disabled', false);
}

function sendEmail(body, btnId) {
  loading(btnId);

  var email = {
    subject: "Jleetranslations Work Request",
    body: body
  };

  $.ajax({
    type: "POST",
    url: "https://rna9ms5pn0.execute-api.us-east-1.amazonaws.com/production/submit",
    crossDomain: true,
    data: JSON.stringify(email),
    contentType: "application/json",
    dataType: "json",
    success: function(data, status) {
      doneLoading(btnId);
    }
  });
}

function requestMsg() {
  var name = $('#msgName').val();
  var email = $('#msgEmail').val();
  var body = $('#msgBody').val();

  if (!name || !email || !body) {
    alert('Please enter a name, email and body text');
    return;
  }

  var emailBody = `
    Name:  ${name} \n
    Email: ${email} \n \n

    Message: \n
    ${body}
  `;

  sendEmail(emailBody, '#msgBtn');
}

function requestCall() {
  var name = $('#callName').val();
  var phone = $('#callPhone').val();

  if (!name || !phone) {
    alert('Please enter a name and a phone number');
    return;
  }

  var emailBody = `
    Name:  ${name} \n \n

    ${name} is requesting a call at ${phone}
  `;

  sendEmail(emailBody, '#callBtn');
}

function isBreakpoint( alias ) {
  return $('.device-' + alias).is(':visible');
}

function windowH() {
    var wH = $(window).height();

    $('.main-bg').css({height: wH});
    $('.main').css({height: wH});
    $('.face-shot').css({height: wH});

    if ( !isBreakpoint('xs') ) {
      // var contactHeight = $('.form-container').css('min-height');
      // $('.korea-photo').css({height: contactHeight});
    } else {
      var mH = '700px';
      $('.main-bg').css({height: mH});
      $('.main').css({height: mH});
      $('.face-shot').css({height: mH});
    }
}

function onContact() {
  $('.contact').get(0).scrollIntoView();
}

$(window).resize(function () {
  windowH();
});

$('#msgForm').submit(function(e) {
  e.preventDefault();
});

$('#callForm').submit(function(e) {
  e.preventDefault();
});

windowH();
