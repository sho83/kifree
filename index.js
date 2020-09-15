
$(document).on("click", "#abcd", function () {
  $("html,body").animate({ scrollTop: $('#home').offset().top }, 1000, 'swing');

});
$(document).on("click", "#myButton", function () {
  var target = $('#home2');
  var position = target.offset().top;
  $('html,body').animate({ scrollTop: position }, 1000);
});