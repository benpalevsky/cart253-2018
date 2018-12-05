/*****************

Project 3 - 100
Ben Palevsky

******************/

var gibberishSounds = [];
var gibberishText = [];

var wordSounds = [];

var correctSounds = [];
var incorrectSound;

var foo;
var foo2;
var i;

var guess;
var input;

var font;

var text_y = 0;

var current_index;

var hasPlayed = false;

//load strings
//p5 speech
function preload() {

    soundFormats('mp3', 'ogg', 'wav');
    correctSounds[0] = loadSound('assets/sounds/clave1.wav');
    correctSounds[1] = loadSound('assets/sounds/clave1.wav');
    incorrectSound = loadSound('assets/sounds/didgeridoo.wav');

    correctSounds[0].setVolume(0.15);
    correctSounds[1].setVolume(0.15);



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
        wordSounds[i] = new wordsound(gibberishText[i], gibberishSounds[i]);
    }

    input = createInput();
    input.style('font-size', '48px');
    input.position(5, height - 72);
    input.elt.focus();

    current_index = Math.floor(random(0, wordSounds.length));



}


function draw() {

    background(255, 190, 239);

    if (hasPlayed === false) {
        hasPlayed = true;
        foo.speak(wordSounds[current_index].sound);
    }

    fill(255, 255, 255, text_y);
    text_y += 8;

    fill(236, 145, 216);
    noStroke();


    rect((width / 2) - textWidth(wordSounds[current_index].word) / 2, (height / 2) - 32, textWidth(wordSounds[current_index].word), 32);
    fill(255);
    text(wordSounds[current_index].word, width / 2, height / 2);




}

function keyPressed() {
    if (keyCode === 13) {
        guess = input.value();
        if (guess === wordSounds[current_index].word) {
            wordSounds.splice(current_index, 1);
            current_index = Math.floor(random(0, wordSounds.length));
            hasPlayed = true;
            input.value("");
            text_y = 0;
            foo.speak(wordSounds[current_index].sound);
            correctSounds[Math.floor(random(1, 2))].play();
        } else {
            incorrectSound.play();
        }
    }
}