/*****************

Project 3 - Music Box
Ben Palevsky

The future of the project: My goal with this project is to make some sort of interactive
music box. I'm not quite sure what it's going to look like, but I've included a simple
prototype that I've built with sliders.

I find it feels OK to play with right now, but I'd like to give the user the ability
to adjust the tempo, maybe change the scale, maybe change individual notes, and maybe
change some of the instruments.

Additionally, it would be great to add some sort of grid so that the values are alligned
to proper beats (quarter, eigth, notes etc).

Also, it could be cool to display a fast fourier transform in the background.

That's what I'm thinking for now! That's a lot of stuff so I'll do my best to get most of it
done. Ultimately what I'm after is something polished that's fun on both mobile and PC.

******************/

// setup()
//
// Description of setup

var dragging = false;
var rectX = 0;
var lastX = 0;

var offsetX = 0;

// @Ben need to convert everything to beats or quarter notes or whatever
// also better variable names rate --> bpm or tempo
// maybe vertical lines that show how many beats are passing?



var steps = 5;


function setup() {


    //createCanvas(displayWidth, displayHeight);
    createCanvas(512, 512);

    background(100);

    noStroke();
    fill(125);
    rect(0, height / 2, width, 2);

    fill(60, 150, 70);


}

function draw() {

    background(100);
    fill(120);

    //draw the horizontal track
    rect(0, height / 2, width, 2);

    //draw the steps
    for (i = 0; i < steps - 1; i++) {
        rect((width / (steps)) * (i + 1), 0, 2, height);
    }

    fill(60, 150, 70);



    // drag
    if (dragging) {
        rectX = lastX + (mouseX - offsetX);
    }



    if ((frameCount % 60 == 0 || frameCount == 1) && (!dragging)) {
        rectX += (width / steps);

        if (rectX > 512) {
            rectX = 0;
        }

    }

    rect(rectX, 0, 30, height);

}


function mousePressed() {
    // detect click on slider
    dragging = true;
    // keep track of relative location of click to corner of rectangle
    offsetX = mouseX;

}

function mouseReleased() {
    // Stop dragging
    dragging = false;
    lastX = rectX;

}