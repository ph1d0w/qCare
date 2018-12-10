$(document).ready(function()
{
    $('#notificacion').delay(2000).animate({
        'marginTop' : "+=580px" 
    });

    $("#notificacion").fadeIn("slow");

    $("#notificacion").delay(5000).fadeOut("slow");
});
