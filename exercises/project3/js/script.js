/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var slider = []
var sliderMax = 4096;
var sliderMin = 0;
var numberOfSliders = 12;



var counter = 0;
var rate = 1;

function setup() {


    createCanvas(1024, 512);
    background(0);

    for (i = 0; i < numberOfSliders; i++) {
        slider[i] = createSlider(sliderMin, sliderMax, map(i, 0, numberOfSliders, 0, 255));
        slider[i].position(0, (height / numberOfSliders) * i);
        slider[i].style('width', width - 2 + "px");
    }




}

function draw() {
    // var val = slider.value();
    // background(val);


    for (i = 0; i < numberOfSliders; i++) {
        if (slider[i].value() == sliderMax)
            slider[i].value(sliderMin + 1)
        else if (slider[i].value() == sliderMin)
            slider[i].value(sliderMax - 1)
        else
            slider[i].value(slider[i].value() + rate);
    }



}