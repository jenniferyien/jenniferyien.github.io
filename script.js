$(function(){

  $("#nav").addClass("js");
  $("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
  $("#menu").click(function(){
	   $("#nav").toggle();
     if ($("#menu").hasClass('close')) {
       $("#menu").removeClass('close').html('&#9776;')
     } else {
       $("#menu").addClass('close').html('&#x2717;')
     }
  });

  // resize of window
  $(window).resize(function(){
  	if(window.innerWidth > 768) {
  		$("#nav").removeAttr("style");
  	}
  });
  $("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top
      },'slow');
  });
  $("#experience").click(function() {
    $('html,body').animate({
        scrollTop: $(".experience").offset().top
      },'slow');
  });
  $("#education").click(function() {
    $('html,body').animate({
        scrollTop: $(".education").offset().top
      },'slow');
  });
  $("#backUpButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".hero-section").offset().top
      },'slow');
  });

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('#backUpButton').fadeIn();
    } else {
      $('#backUpButton').fadeOut();
    }
  });

});
