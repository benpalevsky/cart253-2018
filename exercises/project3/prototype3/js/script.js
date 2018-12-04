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

// a = Kick()
// a.play(55)
// b = Snare().play()
// c = Hat().play()
// d = Clave().play()
// e = Cowbell().play()
// f = Conga().play()

// d.note( 'c4')
// d.note( 'eb4' )

var slider;
var mySequencer1;
var mySequencer2;
var myScale1 = ['c3', 'd3', 'e3', 'a3'];
var myScale2 = ['Kick', 'Snare', 'Hat', 'Clave', 'Cowbell', 'Conga'];

var sliderNote;

var gui;

var myRate = 10;
var testString = "Hello World!"

var a;


function setup() {

    //createCanvas(displayWidth, displayHeight);
    createCanvas(512, 512);


    mySequencer1 = new Sequencer(width / 2, 0, 4, 512 / 2, 512 / 2, 16, myScale1, "SYNTH");
    sliderNote = mySequencer1.sliders[1].instrument.note;
    mySequencer2 = new Sequencer(width / 2, height / 2, 4, 512 / 2, 512 / 2, 16, myScale2, "DRUM");

    slider = createSlider(1, 20, 1);
    slider.position(25, 25);
    slider.style('width', '80px');

    sliderRange(0, 20, 1);
    gui = createGui('p5.gui');
    sliderRange(0, 20, 1);
    gui.addGlobals('myRate');

    gui.addGlobals('sliderNote');

    mySequencer1.sliders[1].instrument.note = sliderNote;





}

function draw() {


    background(100);

    mySequencer1.displaySliders();
    mySequencer2.displaySliders();

    if (frameCount % myRate == 0 || frameCount == 1) {

        mySequencer1.moveSliders();
        mySequencer2.moveSliders();

    }


}