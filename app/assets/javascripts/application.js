// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  "use strict";

  var app = {};
  app.init = function() {
    app.pageScroll();
    app.scrollTopBtn();
    app.buttonFade();
    app.toggleLanguage();
    app.scrollReveal();

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
      $('.navbar-toggle:visible').click();
    });

  };

  app.scrollReveal = function() {
    var config = {
      viewFactor : 0.50,
      duration   : 1000,
      distance   : "0px",
      scale      : 0,
      viewOffset: { top: 50 },
    }

    window.sr = new ScrollReveal(config);
    sr.reveal('.page-title');
    sr.reveal('.portfolio-item', { duration: 1000 }, 200);
    sr.reveal('.intro-cards');
    sr.reveal('.contact-form');
    sr.reveal('.social-buttons');
  };

  // Page scrolling - requires jQuery Easing plugin
  app.pageScroll = function() {
    $('.page-scroll a').bind('click', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      e.preventDefault();
    });
  };


  // Scroll to top of the page button fade on scroll up
  app.buttonFade = function() {
    app.offset = 250;
    app.duration = 300;

    $(window).scroll(function() {

      if ($(this).scrollTop() > app.offset) {
        $('.scroll-top').fadeIn(app.duration);
        $('.vr-link').fadeIn(app.duration);
      } else {
        $('.scroll-top').fadeOut(app.duration);
        $('.vr-link').fadeOut(app.duration);
      }
    });
  };

  // Scroll to top button
  app.scrollTopBtn = function() {
    $('.scroll-top').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, app.duration);
      return false;
    });
  };

  app.toggleLanguage = function() {
    // Flip about section on button click
    app.language = true;
    $('#lang').on('click', function() {
      if (app.language) {
        $('.flip-container').toggleClass('flip');
        $('#lang').text('ENG');
        app.language = false;
      } else {
        $('.flip-container').toggleClass('flip');
        $('#lang').text('中文');
        app.language = true;
      }
    });
  };

  app.init();
});
