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

var lastX = 0;

var offsetX = 0;

// @Ben need to convert everything to beats or quarter notes or whatever
// also better variable names rate --> bpm or tempo
// maybe vertical lines that show how many beats are passing?



var steps = 16;

//synth for each slider
var aSynth;
var bSynth;
var cSynth;
var dSynth;

var a;

//location for each handle
var ax = 0;
var bx = 0;
var cx = 0;
var dx = 0;

var aPause = false;
var bPause = false;
var cPause = false;
var dPause = false;

var globalPause = false;

//location for selector
var sy = 0;

var rate = 4;

function setup() {

    //createCanvas(displayWidth, displayHeight);
    createCanvas(512, 512);

    background(100);

    noStroke();
    fill(125);
    rect(0, height / 2, width, 2);

    fill(60, 150, 70);

    aSynth = new Instrument('c3');
    bSynth = new Instrument('a3');
    cSynth = new Instrument('g3');
    dSynth = new Instrument('c4');



}

function draw() {

    background(100);
    fill(120);

    //draw the steps
    for (j = 0; j < 3; j++) {

        //draw the horizontal track
        rect(0, height * (j + 1) / 4, width, 2);


        for (i = 0; i < steps - 1; i++) {
            rect((width / (steps)) * (i + 1), 0, 2, height);
        }
    }

    // drag controls
    if (dragging) {
        ax = lastX + (mouseX - offsetX);
    }

    //move the handle
    if ((frameCount % rate == 0 || frameCount == 1) && (!dragging) && (!globalPause)) {

        if (!aPause)
            ax += (width / steps);
        if (!bPause)
            bx += (width / steps);
        if (!cPause)
            cx += (width / steps);
        if (!dPause)
            dx += (width / steps);


        //play every beat
        //aSynth.note('c4');

        //worldwrap
        //play note
        if (ax > ((width / steps) * (steps - 1))) {
            ax = 0;
            aSynth.oneShot();
        }
        if (bx > ((width / steps) * (steps - 1))) {
            bx = 0;
            bSynth.oneShot();
        }
        if (cx > ((width / steps) * (steps - 1))) {
            cx = 0;
            cSynth.oneShot();

        }
        if (dx > ((width / steps) * (steps - 1))) {
            dx = 0;
            dSynth.oneShot();

        }




    }


    //draw everything
    fill(60, 150, 70);
    rect(ax, 0 * (height / 4), width / steps, height / 4);


    fill(150, 60, 70);

    rect(bx, 1 * (height / 4), width / steps, height / 4);
    fill(60, 70, 150);

    rect(cx, 2 * (height / 4), width / steps, height / 4);
    fill(100, 140, 70);

    rect(dx, 3 * (height / 4), width / steps, height / 4);

    fill(255, 255, 255, 100);
    rect(0, sy * (height / 4), width, height / 4);




}

//arrow key controls

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        sy = constrain(++sy, 0, 3);
        aPause = false;
        bPause = false;
        cPause = false;
        dPause = false;
    } else if (keyCode === UP_ARROW) {
        sy = constrain(--sy, 0, 3);
        aPause = false;
        bPause = false;
        cPause = false;
        dPause = false;
    } else if (keyCode === RIGHT_ARROW) {
        switch (sy) {
            case 0:
                aPause = true;
                ax += (width / steps);
                break;
            case 1:
                bPause = true;
                bx += (width / steps);
                break;
            case 2:
                cPause = true;
                cx += (width / steps);
                break;
            case 3:
                dPause = true;
                dx += (width / steps);
                break;
        }
    } else if (keyCode === LEFT_ARROW) {
        switch (sy) {
            case 0:
                aPause = true;
                ax -= (width / steps);
                break;
            case 1:
                bPause = true;
                bx -= (width / steps);
                break;
            case 2:
                cPause = true;
                cx -= (width / steps);
                break;
            case 3:
                dPause = true;
                dx -= (width / steps);
                break;

        }
    } else if (keyCode === 32) {

        globalPause = !globalPause

        if (globalPause === true) {
            aPause = true;
            bPause = true;
            cPause = true;
            dPause = true;
        } else {
            aPause = false;
            bPause = false;
            cPause = false;
            dPause = false;
        }

    } else if (keyCode === 87) {
        rate = constrain(++rate, 1, 20);



    } else if (keyCode === 69) {

        rate = constrain(--rate, 1, 20);


    }

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
    lastX = ax;

}