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

var midiNotes = [52, 54, 64, 66, 52, 54, 64, 66, 52, 54, 64, 66, 52, 54, 64, 66, 52, 54, 64, 66];
var drums;
var a;

var slider = []
var numberOfSliders = 16;



var cutoff;
var counter = 0;
var rate = 1.5;

// @Ben need to convert everything to beats or quarter notes or whatever
// also better variable names rate --> bpm or tempo
// maybe vertical lines that show how many beats are passing?

function setup() {


    drums = Gibber.Percussion.EDrums('x*ox*xo-');
    Gibber.Clock.rate = 1;
    a = Sine();
    a.frequency.seq([220, 440], [1 / 4, 1 / 8, 1 / 4]);


    createCanvas(1024, 512);
    background(255);

    fill(255, 0, 0);
    cutoff = width - 128;
    rect(cutoff, 0, 10, height);

    for (i = 0; i < numberOfSliders; i++) {
        //slider[i] = createSlider(sliderMin, sliderMax, map(i, 0, numberOfSliders, 0, 255));
        slider[i] = new Slider(0, width, 0 + (i * (width / numberOfSliders)), 0.1, midiNotes[i]);
        slider[i].object.position(0, ((height / numberOfSliders) * i) + (height / 3 / numberOfSliders));
        slider[i].object.style('width', width - 2 + "px");
    }




}

function draw() {


    for (i = 0; i < numberOfSliders; i++) {
        if (slider[i].object.value() == slider[i].minValue)
            slider[i].object.value(slider[i].minValue + 1)
        else if (slider[i].object.value() == slider[i].minValue)
            slider[i].object.value(slider[i].minValue - 1)
        else
            slider[i].object.value(slider[i].object.value() + rate);
    }

    for (i = 0; i < numberOfSliders; i++) {
        if (slider[i].object.value() >= cutoff) {
            //slider[i].playNote();
            slider[i].reset();
        }
    }



}