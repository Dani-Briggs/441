/*
Author: Dani Briggs
Date: April 8, 2019
Purpose: HTML5
*/
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
var x = 50;  var y = 50;
drawSquare();
function drawSquare()
    {
        ctx.clearRect(0,0,800,600);
        ctx.fillRect(x, y, 20, 20);
    }
$(document).ready(function(){
  $(this).keypress(function(event){
    getKey(event);
  })
})

function getKey(event){
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);
  if(actualLetter == "w"){
    moveUp();
  }
  if(actualLetter == "s"){
    moveDown();
  }
  if(actualLetter == "a"){
    moveLeft();
  }
  if(actualLetter == "d"){
    moveRight();
  }
  drawSquare();
}
function moveUp(){
  y-=10
}
function moveDown(){
  y+=10
}
function moveLeft(){
  x-=10
}
function moveRight(){
  x+=10
}
