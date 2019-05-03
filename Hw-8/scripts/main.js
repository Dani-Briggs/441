/*
Author: Dani Briggs
Date: March 12, 2019
Purpose: jquery
*/

$(document).ready(function(){

  $("button").click(function(){

    $("#textone").fadeOut().fadeIn()
    $("#texttwo").slideToggle()

      $("#dot").fadeOut().fadeIn().slideUp().slideDown()
    setTimeout(imageFade(),1000)
     setInterval(moveSquare(), 1000);
  });


});

function moveSquare(){
    $("#square").animate({left:'250px'}).animate({top:'450px'}).animate({left:'0px'}).animate({top:'100px'}).fadeToggle()
    $("#squareTwo").animate({left:'250px'}).animate({top:'250px'}).animate({left:'0px'}).animate({top:'100px'})
}

function imageFade(){
  $("#port").fadeOut().fadeIn()
  $("#salt").fadeOut().fadeIn()
  $("#vegas").fadeOut().fadeIn()
}
