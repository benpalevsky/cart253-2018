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

var notes = ["c4", "d4", "e4", "g4"];
var drums;
var a;

var slider = []
var numberOfSliders = 4;

var pauseMusic = true;

var cutoff;
var counter = 0;
var rate = 4;

var phrase;

// @Ben need to convert everything to beats or quarter notes or whatever
// also better variable names rate --> bpm or tempo
// maybe vertical lines that show how many beats are passing?

function setup() {


    createCanvas(512, 512);
    background(100);

    Gibber.timeSignature = "4/4";
    Gibber.Clock.bpm = 120;
    Gibber.Clock.rate = 4;


    phrase = "xxx-xxxo";

    // for (i = 0; i < phrase.length; i++) {
    //     fill(255);
    //     noStroke();
    //     rect(width / phrase.length * i, 0, 10, height);
    // }

    // will not wrap the drums
    //drums = Gibber.Percussion.EDrums(phrase, 4 / 4);

    //will wrap the drums
    //drums = Gibber.Percussion.EDrums(phrase);

    //a = Sine();
    //a.frequency.seq([220, 440], [1 / 4, 1 / 8, 1 / 4]);

    b = FM({
        attack: ms(1)
    });

    //b.note.seq(['a2', 'bb2', 'c2', 'd2'].random(), [1 / 8, 1 / 4].random(1 / 8, 2));



    //createSlider(1, 4, 1, 1);
    fill(255, 0, 0);
    cutoff = width - 128;

    fill(0);

    d = Synth();
    d.attack = ms(1);









    for (i = 0; i < numberOfSliders; i++) {
        //slider[i] = createSlider(sliderMin, sliderMax, map(i, 0, numberOfSliders, 0, 255));
        slider[i] = createSlider(0, 63, i * 16, 1);
        slider[i].position(0, ((height / numberOfSliders) * i) + (height / 3 / numberOfSliders));
        slider[i].style('width', width - 2 + "px");

        //synthesizer
        slider[i].instrument = Synth();
        slider[i].instrument.attack = ms(1);
    }




}

function draw() {




    if ((frameCount % rate == 0 || frameCount == 1) && (pauseMusic)) {

        for (i = 0; i < numberOfSliders; i++) {
            if (slider[i].value() > 62) {
                slider[i].value(0);
                slider[i].instrument.note(notes[i]);

            } else
                slider[i].value(slider[i].value() + rate);
        }

    }
    //createSlider(1, 4, 1, 1);

    //rect(1, 1, width / 2, height / 2);
    // for (i = 0; i < numberOfSliders; i++) {
    //     if (slider[i].object.value() == slider[i].minValue)
    //         slider[i].object.value(slider[i].minValue + 1)
    //     else if (slider[i].object.value() == slider[i].minValue)
    //         slider[i].object.value(slider[i].minValue - 1)
    //     else
    //         slider[i].object.value(slider[i].object.value() + rate);
    // }
    //
    // for (i = 0; i < numberOfSliders; i++) {
    //     if (slider[i].object.value() >= cutoff) {
    //         //slider[i].playNote();
    //         slider[i].reset();
    //     }
    // }
    //a.frequency.seq([mouseX, mouseY], [1 / 4, 1 / 4]);
    //drums.pitch = mouseX;


}