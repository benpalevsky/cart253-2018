/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var angleYsun = 0;
var angleYearth = 0;
var angleYmoon = 0;

var scaleFactor = 1;

function setup() {
    createCanvas(640, 480, WEBGL);

}


// draw()
//
// Description of draw()

function draw() {
    background(20);
    scale(scaleFactor);

    //sun
    rotateY(angleYsun);
    fill(200, 100, 0);
    box(50, 50, 50);

    translate(100, 0, 0);

    //earth
    rotateY(angleYearth);
    fill(0, 0, 100);
    box(20, 20, 20);

    translate(10, 0, 0);

    //moon
    rotateY(angleYmoon);
    fill(220);
    box(10, 10, 10);

    angleYsun += 0.01;
    angleYearth += 0.1;
    angleYmoon += 0.01;
}