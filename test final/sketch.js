var song;
var fft;
var w;


function setup(){
  frameRate(34);
  createCanvas(windowWidth, windowHeight);
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
  background(200);
  var spectrum = fft.analyze();
  noStroke();
  fill(230);
  for (var i = 0; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, 255, height, 0);
    rect(i*w, y, w - 2, height - y);

  }

///*Album one - Absolution*
//***Shadow person one***
 push();
  //**body**
  fill(0, 0, 55);
  noStroke();
  rect(550, 370, 50, 50);
  rect(500, 320, 50, 50);
  rect(450, 320, 50, 50);
  rect(500, 270, 50, 50);
  rect(450, 270, 50, 50);
  rect(400, 220, 50, 50);
  rect(400, 170, 50, 50);
  rect(400, 270, 50, 50);

  //**right leg**
  push();

  rect(450, 220, 50, 50);
  rect(450, 170, 50, 50);
  rect(450, 120, 50, 50);
  rect(450, 70, 50, 50);
  rect(450, 20, 50, 50);
  pop();

  //**left leg**
  push();
  rect(350, 170, 50, 50);
  rect(350, 120, 50, 50);
  rect(350, 70, 50, 50);
  rect(350, 20, 50, 50);
  pop();

  //**Right Arm**
  push();
  rect(550, 220, 50, 50);
  rect(600, 170, 50, 50);
  rect(650, 120, 50, 50);
  pop();

  //**left Arm**
  push();
  rect(400, 370, 50, 50);
  rect(350, 420, 50, 50);
  rect(300, 470, 50, 50);
  pop();

pop();

//**Shadow person two**
push();
 //**body**
 fill(0, 0, 55);
 noStroke();
 translate(750, 10);
 scale(0.5, 0.5);
 rect(550, 370, 50, 50);
 rect(500, 320, 50, 50);
 rect(450, 320, 50, 50);
 rect(500, 270, 50, 50);
 rect(450, 270, 50, 50);
 rect(400, 220, 50, 50);
 rect(400, 170, 50, 50);
 rect(400, 270, 50, 50);
 //**right leg**
 push();

 rect(450, 220, 50, 50);
 rect(450, 170, 50, 50);
 rect(450, 120, 50, 50);
 rect(450, 70, 50, 50);
 rect(450, 20, 50, 50);
 pop();

 //**left leg**
 push();
 rect(350, 170, 50, 50);
 rect(350, 120, 50, 50);
 rect(350, 70, 50, 50);
 rect(350, 20, 50, 50);
 pop();

 //**Right Arm**
 push();
 rect(550, 220, 50, 50);
 rect(600, 170, 50, 50);
 rect(650, 120, 50, 50);
 pop();

 //**left Arm**
 push();
 rect(400, 370, 50, 50);
 rect(350, 420, 50, 50);
 rect(300, 470, 50, 50);
 pop();

pop();

//**standing person**
//*head*
push();

fill(0);
rect(1200, 330, 20, 20);
rect(1200, 310, 20, 20);
rect(1220, 310, 20, 20);
rect(1240, 310, 20, 20);
rect(1260, 310, 20, 20);

fill(255,224,189);
noStroke();
rect(1220, 330, 60, 60);


pop();

//body
push();

fill(35);
noStroke();
rect(1220, 390, 30, 30);
rect(1250, 390, 30, 30);
rect(1220, 420, 30, 30);
rect(1250, 420, 30, 30);
rect(1220, 450, 30, 30);
rect(1250, 450, 30, 30);
rect(1220, 480, 30, 30);
rect(1250, 480, 30, 30);
rect(1220, 510, 30, 30);
rect(1250, 510, 30, 30);

//right leg
push();
rect(1280, 540, 30, 30);
rect(1280, 570, 30, 70);
pop();

//left leg
push();
rect(1190, 540, 30, 30);
rect(1190, 570, 30, 70);
pop();

//right Arm
push();
rect(1280, 390, 30, 30);
rect(1310, 420, 30, 30);
rect(1340, 450, 30, 30);
rect(1340, 480, 30, 30);

//hand
push();
fill(255,224,189);
noStroke();
rect(1340, 510, 30, 30);
pop();

pop();

//left arm
push();
rect(1190, 390, 30, 30);
rect(1160, 420, 30, 30);
rect(1130, 450, 30, 30);
rect(1130, 480, 30, 30);

//hand
push();
fill(255,224,189);
noStroke();
rect(1130, 510, 30, 30);
pop();

//mask
push();
fill(0);
noStroke();
rect(1130, 540, 15, 40);
rect(1145, 540, 15, 20);
pop();


pop();

//Shadow
push();
fill(0);
noStroke();
rect(1090, 640, 220, 20);
pop();

pop();
}
