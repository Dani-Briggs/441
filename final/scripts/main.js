/*
Author: Dani Briggs
Date: April 25, 2019
Purpose: Final
*/
var song;
var fft;
var w;


function setup(){
  frameRate(34);
  createCanvas(1540, 300);
  song = loadSound("8-bit_sing_for_ab.mp3", loaded);
  let x = width/2;
  let y = height;
  fft = new p5.FFT(0, 512);
  w = width/64;


}

function loaded(){
  song.play();
}


function draw(){
  background(235);
  var spectrum = fft.analyze();
  noStroke();
  fill(200);
  for (var i = 0; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 255, height, 0);
    rect(i*w, y, w - 2, height - y);

  }
}

///*Album one - Absolution*
