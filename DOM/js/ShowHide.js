$(document).ready(function(){

    $("#exibir").click(function(){

        $("img").show();
    });

    $("#ocultar").click(function(){
        
        $("img").hide();
    });

    $("#exibir").click(function(){

        $("img").fadeIn();
    })

    $("#ocultar").click(function(){
        $("img").fadeOut();
    })

    $(".ocultar").click(function(){
        $(".mensagem").slideUp(2000);
    })

    $(".existir").click(function(){
        $(".mensagem").slideDown(2000);
    });

    

});