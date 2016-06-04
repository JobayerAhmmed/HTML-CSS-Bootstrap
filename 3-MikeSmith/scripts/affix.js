$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      // console.log($(window).scrollTop())
    var height = $('#banner').height() + $('#navigation').height() + 27;
    if ($(window).scrollTop() > height) {
      $('#navigation').addClass('navbar-fixed');
      $('#about').addClass('space-top');
      $('#back-top').addClass('top');
    }
    if ($(window).scrollTop() < height) {
      $('#navigation').removeClass('navbar-fixed');
      $('#about').removeClass('space-top');
      $('#back-top').removeClass('top');
    }
  });

  if($(window).width() < 768) {
    $('.ex-calendar').removeClass('col-xs-2');
    $('.ex-calendar').addClass('col-xs-4')
  }
});