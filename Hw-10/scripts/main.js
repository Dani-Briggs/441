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
