$(document).ready(function() {
    
    $(".button").on('click', function(){

        let button = $(this).text();
        
        if(button == "Ver mais"){
            $(this).siblings("p").fadeIn(1000);
            $(this).text("Ver menos");
        }
        if(button == "Ver menos"){
            $(this).siblings("p").fadeOut(1000);
            $(this).text("Ver mais");
        }

    });

    $(".card").mouseleave(function(){
        $(this).find("p").fadeOut();
        $(".button").text("Ver mais");
    });

});