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
var sliderMax = 255;
var sliderMin = 0;
var numberOfSliders = 30;



var counter = 0;
var rate = 5;

function setup() {
    createCanvas(500, 500);

    for (i = 0; i < numberOfSliders; i++) {
        slider[i] = createSlider(sliderMin, sliderMax, map(i, 0, numberOfSliders, 0, 255));
        slider[i].position(10, 15 * i);
        slider[i].style('width', '500px');
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
            slider[i].value(slider[i].value() + sin(rate));
    }



}