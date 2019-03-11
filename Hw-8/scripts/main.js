/*
Author: Dani Briggs
Date: March 11, 2019
Purpose: jquery
*/

$(document).ready(function(){

  $("button").click(function(){
   setInterval(moveSquare(), 1000);
    $("#port").fadeOut().fadeIn()
    $("#textone").fadeOut().fadeIn()
  });


});

function moveSquare(){
    $("#square").animate({left:'250px'}).animate({top:'450px'}).animate({left:'0px'}).animate({top:'100px'}).fadeOut()

}
