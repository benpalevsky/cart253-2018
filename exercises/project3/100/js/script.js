/*****************

Project 3 - 100
Ben Palevsky

******************/

var gibberishSounds = [];
var gibberishText = [];

var wordSounds = [];

var correctSounds = [];
var incorrectSound;

var timePassed;
var timeAtStart;
var timeAtEnd;

var foo;
var foo2;
var i;

var images = [];

var guess;
var input;

var latoFont;
var pacificoFont;

var gameHasStarted = false;

var text_y = 0;

var current_index = 0;

var hasPlayed = false;

var charactersTyped = 0;

var wordsTypedCorrectly = 0;

//load strings
//p5 speech
function preload() {

    soundFormats('mp3', 'ogg', 'wav');
    correctSounds[0] = loadSound('assets/sounds/clave1.wav');
    correctSounds[1] = loadSound('assets/sounds/clave1.wav');
    incorrectSound = loadSound('assets/sounds/didgeridoo.wav');

    correctSounds[0].setVolume(0.15);
    correctSounds[1].setVolume(0.15);

    latoFont = loadFont('assets/fonts/Lato-Regular.ttf');
    pacificoFont = loadFont('assets/fonts/Inconsolata-Bold.ttf');

    gibberishSounds = loadStrings('assets/strings/sounds.txt');
    gibberishText = loadStrings('assets/strings/words.txt');

    foo = new p5.Speech(); // speech synthesis object

    for (var i = 0; i <= 34; i++) {
        images[i] = loadImage('assets/images/emoji/' + i + ' .png');
    }



}


function setup() {

    i = 0;

    createCanvas(512, 512);
    background(255, 190, 239);

    textSize(38);
    textAlign(CENTER);
    textFont(latoFont);

    for (var i = 0; i < Math.min(gibberishSounds.length, gibberishText.length); i++) {
        wordSounds[i] = new wordsound(gibberishText[i], gibberishSounds[i], images[i]);
    }

    input = createInput();
    input.style('font-size', '24px');
    input.style('background-color', '#EC91D8');
    input.style('width', '' + (width / 2) + 'px');
    input.position((width / 4), height - 72);
    input.style('color', 'white');
    input.elt.focus();

    fill(255);




}


function draw() {


    if (gameHasStarted) {

        if (hasPlayed === false) {
            hasPlayed = true;
            foo.speak(wordSounds[current_index].sound);
        }

        fill(255, 255, 255, text_y);
        text_y += 8;

        if (wordsTypedCorrectly < 15) {

            background(255, 190, 239);
            fill(236, 145, 216);
            noStroke();

            if (wordsTypedCorrectly === 13) {
                rect((width / 2) - (textWidth(wordSounds[current_index].word)) / 2, (height / 2) - 32, textWidth(wordSounds[current_index].word), 80);
            } else {
                rect((width / 2) - (textWidth(wordSounds[current_index].word)) / 2, (height / 2) - 32, textWidth(wordSounds[current_index].word), 40);
            }
            fill(255);
            text(wordSounds[current_index].word, 0, (height / 2) - textSize(), width, height);
            text(timePassed, width / 2, height / 8);

        } else if (wordsTypedCorrectly >= 15 && wordsTypedCorrectly < 30) {
            background(255, 172, 129);
            fill(255, 146, 139);
            noStroke();
            rect((width / 2) - (textWidth(wordSounds[current_index].word)) / 2, (height / 2) - 32, textWidth(wordSounds[current_index].word), 40);
            fill(255);
            text(wordSounds[current_index].word, 0, (height / 2) - textSize(), width, height);
            input.style('background-color', '#FF928B');
            text(timePassed, width / 2, height / 8);


        } else if (wordsTypedCorrectly >= 28 && wordsTypedCorrectly < 33) {

            background(243, 117, 43);
            fill(113, 0, 9);
            noStroke();
            rect((width / 2) - (textWidth(wordSounds[current_index].word)) / 2, (height / 2) - 32, textWidth(wordSounds[current_index].word), 40);
            fill(255);
            text(wordSounds[current_index].word, 0, (height / 2) - textSize(), width, height);
            input.style('background-color', '#710000');
            text(timePassed, width / 2, height / 8);


        } else if (wordsTypedCorrectly === 33) {

            background(255, 190, 239);
            noStroke();
            input.style('background-color', '#EC91D8');

            fill(236, 145, 216);
            rect((width / 2) - (textWidth('Your speed is ' + Math.floor(((charactersTyped / timeAtEnd) * 60)) + ' characters a minute.')) / 2, (height / 8) - 32, textWidth('Your speed is ' + Math.floor(((charactersTyped / timeAtEnd) * 60)) + ' characters a minute.'), 80);
            rect((width / 2) - (textWidth('Thats pretty fast!')) / 2, (height / 2) - 32, textWidth('Thats pretty fast!'), 40);

            fill(255);
            text('Your speed is ' + Math.floor(((charactersTyped / timeAtEnd) * 60)) + ' characters a minute.', 0, (height / 8) - textSize(), width, height);
            text('Thats pretty fast!', 0, (height / 2) - textSize(), width, height);




        }

        timePassed = Math.floor((millis() - 1000) / 1000) - timeAtStart;



    } else {

        textFont(latoFont);

        background(255, 190, 239);
        noStroke();
        fill(236, 145, 216);
        rect((width / 2) - (textWidth('Typing Speed Test')) / 2, (height / 6) - 32, textWidth('Typing Speed Test'), 40);
        fill(236, 145, 216);
        rect((width / 2) - (textWidth('Type "Start" to Begin')) / 2, (height / 2) - 32, textWidth('Type "Start" to Begin'), 40);
        timeAtStart = Math.floor((millis() - 1000) / 1000);
        fill(255);

        text('Typing Speed Test', 0, (height / 6) - textSize(), width, height);
        text('Type "Start" to Begin', 0, (height / 2) - textSize(), width, height);

    }

    if (!gameHasStarted && wordsTypedCorrectly) {
        image(wordSounds[0].image, (width / 2) - wordSounds[current_index].image.width / 2, height / 4);

    } else if (wordsTypedCorrectly < 33) {
        image(wordSounds[current_index + 1].image, (width / 2) - wordSounds[current_index + 1].image.width / 2, height / 4);

    } else {
        image(wordSounds[0].image, (width / 2) - wordSounds[0].image.width / 2, height / 4);

    }


}

function keyPressed() {
    if (keyCode === 13) {
        guess = input.value();
        if (guess === wordSounds[current_index].word && wordsTypedCorrectly < 33) {

            ++wordsTypedCorrectly;
            charactersTyped += wordSounds[current_index].word.length;
            wordSounds.splice(current_index, 1);
            hasPlayed = true;
            input.value("");
            text_y = 0;
            foo.speak(wordSounds[current_index].sound);
            correctSounds[Math.floor(random(1, 2))].play();

            //end state
            if (wordsTypedCorrectly === 33) {
                timeAtEnd = timePassed;
            }

        } else if (guess === 'Start' && !gameHasStarted) {
            gameHasStarted = true;
            input.value("");

        } else if (wordsTypedCorrectly >= 33 || !gameHasStarted) {
            foo.speak(input.value());
            input.value("");
        } else {
            incorrectSound.play();
        }
    }
}