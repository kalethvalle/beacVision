$(document).ready(function() {
    $(".tab-content").load("home.html");
    $('.dropdown-toggle').dropdown()
});

$("#home-tab").click(function() {
    $(".tab-content").load("home.html");
})

$("#estado-tab").click(function() {
    $(".tab-content").load("estado.html");
})  

$("#actualiza-tab").click(function(){
    $(".tab-content").load("actualiza.html")
})
$("#historial-tab").click(function(){
    $(".tab-content").load("historial.html")
})
$("#historial_2-tab").click(function(){
    $(".tab-content").load("historial_2.html")
})