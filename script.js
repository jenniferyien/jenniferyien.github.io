$(function(){

  // Click Function to scroll down to particular div section
  $("#about").click(function() {
    $('html,body').animate({
        scrollTop: $(".row.about").offset().top
      }, 'slow');
  // adjustment to window size
    windowHeight = $(window).innerHeight();
    $('.row.about').css('min-height', windowHeight);
  });

  $("#skill").click(function() {
    $('html,body').animate({
        scrollTop: $(".row.skill").offset().top
      },'slow');
    windowHeight = $(window).innerHeight();
    $('.row.skill').css('min-height', windowHeight);
  });

  $("#project").click(function() {
    $('html,body').animate({
        scrollTop: $(".row.projects").offset().top
      },'slow');
    windowHeight = $(window).innerHeight();
    $('.row.projects').css('min-height', windowHeight);
  });

  $("#email").click(function() {
    $('html,body').animate({
        scrollTop: $(".row.contact").offset().top
      },'slow');
    windowHeight = $(window).innerHeight();
    $('.row.contact').css('min-height', windowHeight);
  });

  $("#name").click(function() {
    $('html,body').animate({
        scrollTop: $(".row.intro").offset().top
      },'slow');
    windowHeight = $(window).innerHeight();
    $('.row.intro').css('min-height', windowHeight);
  });
});
