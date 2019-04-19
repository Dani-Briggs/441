/*
Author: Dani Briggs
Date: April 19, 2019
Purpose: last HW
*/
var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var question;
var squareArray = [];
$(document).ready(function()){
  setup();

  $(this).keypress(function(event)){
    getKey(event);
  }

}


function setup(){

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  square1 = new Square(100, 100, 50, 50, "blue");
  square2 = new Square(400, 500, 150, 150, "green");
  /* $.getJSON("data/info.json", function(data){
    for(var i = 0; i < data.squares.length; i++){
      squareArray.push(new Square(data.squares.[i].x,data.squares[i].y, data.squares[i]))
    }
  })*/

  drawSquare();

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

  }

  function moveUp(){
      square1.y-=10
  }
  function moveDown(){
      square1.y+=10
  }
  function moveLeft(){
      square1.x-=10
  }
  function moveRight(){
      square1.x+=10
  }

 function drawSquare(){
   ctx.clear(0,0,900,700);
   ctx.fillStyle = square1.mainColor;
   ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
   ctx.fillStyle = square2.mainColor;
   ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
   for(var i = 0; i < squareArray.length; i++){
     ctx.fillStyle = squareArray[i].mainColor;
     ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height)
   }
 }


}
