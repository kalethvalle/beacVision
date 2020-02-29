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
