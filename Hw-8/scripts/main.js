/*
Author: Dani Briggs
Date: March 11, 2019
Purpose: jquery
*/

$(document).ready(function(){

  $("button").click(function(){

    $("#textone").fadeOut().fadeIn()
      $("#dot").fadeOut().fadeIn()
     setInterval(moveSquare(), 1000);
  });


});

function moveSquare(){
    $("#square").animate({left:'250px'}).animate({top:'450px'}).animate({left:'0px'}).animate({top:'100px'}).fadeToggle()

}

function imageFade(){
  $("port").fadeOut().fadeIn()
  $("salt").fadeOut().fadeIn()
  $("vegas").fadeOut().fadeIn()
}
