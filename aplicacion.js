$(document).ready(function(){
    var todo = $(".div");

    todo.mouseenter(function(){
        $(this).fadeTo("fast",0.5);
    });

    todo.mouseleave(function(){
        $(this).fadeTo("fast",1);
    });

    var boton1 = $(".boton1");
    var foto1 = $("#foto");

    boton1.click(function(){
        foto1.hide();
    });

    var boton2 = $(".boton2");
    var titulo = $("#titulo");

    boton2.click(function(){
        $(titulo).text(":)");
    });
});