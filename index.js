$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var adjust=0;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 1500, "swing");
    return false;
  });
});

$(document).on("click", "#abcd", function(){
  $("html,body").animate({scrollTop:$('#home').offset().top},1000,'swing');
                          
});
