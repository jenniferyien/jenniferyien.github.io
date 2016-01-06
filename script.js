$(function(){

  // Navbar change
  $("#nav").addClass("js");
  $("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
  $("#menu").click(function(){
	     $("#nav").toggle();
  });

  // resize of window
  $(window).resize(function(){
    	if(window.innerWidth > 768) {
    		$("#nav").removeAttr("style");
    	}
  });


  // Click Function to scroll down to particular div section
  $("#home").click(function() {
    $('html,body').animate({
        scrollTop: $(".intro").offset().top - 50
      }, 'slow');
  // adjustment to window size
    windowHeight = $(window).innerHeight();
    $('.intro').css('min-height', windowHeight);
  });

  // scroll effect
  $("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top - 50
      },'slow');
    windowHeight = $(window).innerHeight();
    $('.about').css('min-height', windowHeight);
  });

  $("#projects").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top - 50
      },'slow');
    windowHeight = $(window).innerHeight();
    $('.projects').css('min-height', windowHeight);
  });

  $("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top - 50
      },'slow');
    windowHeight = $(window).innerHeight();
    $('.contact').css('min-height', windowHeight);
  });

  // logo animation
  $("#logo").click(function() {
    $('html,body').animate({
        scrollTop: $(".intro").offset().top - 50
      }, 'slow');
    windowHeight = $(window).innerHeight();
    $('.intro').css('min-height', windowHeight);
  });

});
