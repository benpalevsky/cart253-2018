/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

var ball;
var img;

// setup()
//
// Description of setup

function setup() {


  img = loadImage("assets/images/dvd.png");
  ball = new Ball();

  createCanvas(640, 480);

  ball.x = width/2;
  ball.y = height/2;
  ball.vx = 1;
  ball.vy = 1;

}


// draw()
//
// Description of draw()

function draw() {

  background(160);
  ball.update(img);
  ball.display(img);

}
