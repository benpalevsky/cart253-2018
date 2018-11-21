/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var midiNotes = [52, 54, 64, 66, 52, 54, 64, 66, 52, 54, 64, 66, 52, 54, 64, 66, 52, 54, 64, 66];


var slider = []
var numberOfSliders = 16;



var cutoff;
var counter = 0;
var rate = 1;

function setup() {



    createCanvas(1024, 512);
    background(0);

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
            slider[i].playNote();
            slider[i].reset();
        }
    }



}