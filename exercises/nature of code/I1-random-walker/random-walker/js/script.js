/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var w;

function setup() {

  createCanvas(500, 500);
  background(100);

  w = new Walker(width / 2, height / 2, 10, 10);

}


// draw()
//
// Description of draw()

function draw() {
  w.update();
  w.display();
}