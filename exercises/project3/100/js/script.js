/*****************

Project 3 - 100
Ben Palevsky

******************/

var gibberishSounds = [];
var gibberishText = [];

var data = [];

var foo;
var foo2;
var i;

var guess;
var input;

var font;

var text_y = 0;

var current_index = 0;

var hasPlayed = false;

//load strings
//p5 speech
function preload() {
    font = loadFont('assets/fonts/Lato-Regular.ttf');
    gibberishSounds = loadStrings('assets/strings/sounds.txt');
    gibberishText = loadStrings('assets/strings/words.txt');

    foo = new p5.Speech(); // speech synthesis object


}


function setup() {

    i = 0;
    createCanvas(512, 512);
    background(100);

    textSize(32);
    textAlign(CENTER);
    textFont(font);

    for (var i = 0; i < Math.min(gibberishSounds.length, gibberishText.length); i++) {
        data[i] = new wordsound(gibberishText[i], gibberishSounds[i]);
    }

    input = createInput();
    input.style('font-size', '48px');
    input.position(5, height - 72);
    input.elt.focus();




}


function draw() {

    background(182, 166, 202);

    if (hasPlayed === false) {
        hasPlayed = true;
        foo.speak(gibberishSounds[current_index]);
    }

    fill(255, 255, 255, text_y);
    text_y += 8;
    text(gibberishText[current_index], width / 2, height / 2);




}

function keyPressed() {
    if (keyCode === 81) {
        foo.speak(Math.floor(random(0, 100)));
    } else if (keyCode === 87) {
        foo.speak(gibberishSounds[Math.floor(random(0, 100))]);
    } else if (keyCode === 39) {
        foo.speak(gibberishSounds[i]);
        text(gibberishSounds[i], random(0, width), random(0, height));
        i++;
    } else if (keyCode === 37) {
        foo.speak(strings[i]);
        text(gibberishSounds[i], random(0, width), random(0, height));
        i--;
    } else if (keyCode === 32) {
        text(gibberishSounds[i - 1], random(0, width), random(0, height));
    } else if (keyCode === 13) {
        guess = input.value();
        if (guess === gibberishText[current_index]) {
            current_index++;
            hasPlayed = true;
            input.value("");
            text_y = 0;
            foo.speak(gibberishSounds[current_index]);

        }
    }
}