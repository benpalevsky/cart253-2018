// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var bumpers = [];
var dvdImg;

var scaleArray = [40, 42, 65, 67, 68, 70];
var note = 0;
var lastNote = 0;
var osc;
var envelope;

var scoreboard;
var leftPaddle;
var rightPaddle;
var ball;
var gameIsActive = false;
var currentGame;

var paddleAlpha = 255;

// setup()
//
// Creates the ball and paddles
function setup() {


    createCanvas(800, 340);
    background(0);

    fill(255);
    dvdImg = loadImage("assets/images/dvd.png");






    // Create a scoreboard


    // Create the game

}

var randomXOffset = 31;
var randomYOffset = 139;
var randomZOffset = 13;

function draw() {




    if (keyIsPressed && !gameIsActive) {
        if (keyIsDown(65)) {
            currentGame = new GameMode("REGULAR");
        } else if (keyIsDown(66)) {
            currentGame = new GameMode("BREAKOUT");
        } else if (keyIsDown(67)) {
            currentGame = new GameMode("DAVID");
        } else if (keyIsDown(68)) {
            currentGame = new GameMode("DVD");
        } else if (keyIsDown(69)) {
            currentGame = new GameMode("MUSHROOM");
        } else if (keyIsDown(70)) {
            currentGame = new GameMode("OSCILLATOR")
        }

        currentGame.setup();
        gameIsActive = true;
    } else if (gameIsActive) {

        currentGame.handleInput();
        currentGame.display();
        currentGame.update();



        ball.handleCollision(leftPaddle);
        ball.handleCollision(rightPaddle);



    } else {

        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("A - Regular Pong\nB - Brick Breaker Pong\nC - David and Goliath Pong\nD - DVD Pong\nE - Synesthesia Pong\nF - Meets the Specifications of this Assignment Pong", width / 2, height / 4);

    }


}