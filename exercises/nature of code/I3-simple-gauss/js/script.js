/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var w = [];
var index = 0;

function setup() {

  createCanvas(500, 500);
  background(255);




}


// draw()
//
// Description of draw()

function draw() {

  noStroke();

  var x = randomGaussian(width / 2, width / 8);
  var y = randomGaussian(height / 2, height / 8);

  if (index < 1000)
    w[index] = new Walker(x, y, 1, 1, 0);
  else
    w[index] = new Walker(x, y, 1, 1, 255);


  for (i = 0; i < w.length; i++) {
    w[i].update();
    w[i].display();
  }

  index++;



}