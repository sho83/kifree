
$(document).on("click", "#abcd", function(){
  $("html,body").animate({scrollTop:$('#home').offset().top},1000,'swing');
                          
});

$(function(){
        
        $('a[href^="#"]').click(function() {
          var adjust=0;
          var speed = 500; 
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, 1000, 'swing');
          return false;
        });
      });
