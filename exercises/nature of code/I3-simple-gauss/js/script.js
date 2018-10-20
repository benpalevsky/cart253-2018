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

function setup() {

  createCanvas(500, 500);
  background(200);


}


// draw()
//
// Description of draw()

function draw() {

  var x = randomGaussian(width / 2, width / 8);
  var y = randomGaussian(height / 2, height / 8);

  noStroke();
  w = new Walker(x, y, 5);

}