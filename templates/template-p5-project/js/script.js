/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

var ex1 = [
    1.5,
    1.5,
    1.5
];

var ex2 = [0.0, 1.0, 2.0, 3.0];
var ex3 = [3.4, 5.6, 123.4, 684.93, 3.4];

function setup() {

    standardDev(ex2);

}

function standardDev(array) {

    sum = 0;
    average = 0;



    for (i = 0; i < array.length; i++) {
        sum += (array[i]);
    }

    average = sum / array.length;

    sum = 0;


    for (i = 0; i < array.length; i++) {
        sum += (((array[i]) - average) * ((array[i]) - average));
    }

    console.log(sum);

    stddev = (Math.sqrt(sum / (array.length)));

    console.log("hi");

}


// draw()
//
// Description of draw()

function draw() {

}