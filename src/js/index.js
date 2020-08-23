import '../css/tailwind.css';

import '@fortawesome/fontawesome-free/css/fontawesome.min.css';

import $ from "jquery";
import './jquery.easing.min';

$(document).on('click', '#arrow, #btn_read_more, .back-to-top', function (e) {
  e.preventDefault();
  if (e.target.dataset.scrollto) {
    var scrollTo = e.target.dataset.scrollto;

    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top
    }, 1500, 'easeInOutExpo');
  } else {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
  }
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});