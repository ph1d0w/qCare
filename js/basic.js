$(document).ready(function()
{
    $('#notificacion').delay(2000).animate({
        'marginTop' : "+=580px" 
    });

    $("#notificacion").fadeIn("slow");

    $("#notificacion").delay(5000).fadeOut("slow");
});

function tiposProblema()
{
    var x = document.getElementById("selectTipo").value;
    var tipo = parseInt(x);
    switch(tipo)
    {
        case 1:
            $('#dolores').css({
                'display' : 'block'
            });
            $('#inflamaciones').css({
                'display' : 'none'
            });
            break;
        case 2:
            $('#inflamaciones').css({
                'display' : 'block'
            });
            $('#dolores').css({
                'display' : 'none'
            });
            break;
    }
}