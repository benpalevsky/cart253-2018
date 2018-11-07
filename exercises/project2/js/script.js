// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var bumpers = [];
var dvdImg;
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

    createCanvas(640, 480);
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
    }



    if (gameIsActive) {

        currentGame.handleInput();
        currentGame.display();
        currentGame.update();



        ball.handleCollision(leftPaddle);
        ball.handleCollision(rightPaddle);



    } else {

        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("A - Regular Pong\nB - Breakout Pong\nC - David and Goliath Pong\nD - DVD Pong\nE - Mushroom Pong\nF - Oscillator Pong", width / 2, height / 2);

    }


}