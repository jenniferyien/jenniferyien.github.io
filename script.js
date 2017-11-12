$(function(){

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
  $("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".about-section").offset().top
      },'slow');
  });
});
