$(document).ready(function() {

    $(".button").on('click', function(){

        let button = $(this).text();

        if(button == "Ver mais"){
            $(this).siblings("p").fadeIn(500);
            $(this).text("Ver menos");
        }
        if(button == "Ver menos"){
            $(this).siblings("p").fadeOut(500);
            $(this).text("Ver mais");
        }

    });

    $(".card").mouseleave(function(){
        $(this).find("p").slideUp();
        $(".button").text("Ver mais");
    });

});