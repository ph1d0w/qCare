$('#goTop').on('click', function(e){
    $("html, body").animate({scrollTop: $("#top").offset().top}, 500);
});
$(document).ready(function() {
    $("#myModal").modal();
  });