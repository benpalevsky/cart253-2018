/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

var ball = [];
var img;
var i = 0;

// setup()
//
// Description of setup

function setup() {

  createCanvas(640, 480);
  img = loadImage("assets/images/dvd.png");

}


// draw()
//
// Description of draw()

function draw() {

  background(160);

  for (j = 0; j < ball.length;j++){


    ball[j].update(img);
    ball[j].display(img);

  }


}


function mouseClicked(){

  ball[i] = new Ball(mouseX, mouseY, 1, 0.1);
  ball[i].vx = 1;
  ball[i].vy = 1;
  i++;

}
