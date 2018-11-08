// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var bumpers = [];
var dvdImg;

var scaleArray = [40, 42, 64, 68, 69, 70];
var note = 0;
var lastNote = 0;
var osc;
var envelope;

var scoreboard;
var leftPaddle;
var rightPaddle;
var ball;
var gameIsActive = false;
var gameOver = false;
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




    if (keyIsPressed && !gameIsActive && !gameOver) {
        if (keyIsDown(65)) {
            currentGame = new GameMode("REGULAR");
            currentGame.setup();
            gameIsActive = true;
        } else if (keyIsDown(66)) {
            currentGame = new GameMode("BREAKOUT");
            currentGame.setup();
            gameIsActive = true;
        } else if (keyIsDown(67)) {
            currentGame = new GameMode("DAVID");
            currentGame.setup();
            gameIsActive = true;
        } else if (keyIsDown(68)) {
            currentGame = new GameMode("DVD");
            currentGame.setup();
            gameIsActive = true;
        } else if (keyIsDown(69)) {
            currentGame = new GameMode("MUSHROOM");
            currentGame.setup();
            gameIsActive = true;
            background(0);
        } else if (keyIsDown(70)) {
            currentGame = new GameMode("MITOSIS")
            currentGame.setup();
            gameIsActive = true;
        }


    } else if (gameIsActive && !gameOver) {

        currentGame.handleInput();
        currentGame.display();
        currentGame.update();



        ball.handleCollision(leftPaddle);
        ball.handleCollision(rightPaddle);

    } else if (!gameIsActive && gameOver) {
        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("Thank you for playing!\nHit R to go back to the Main Menu", width / 2, height / 4);

        if (keyIsDown(82)) {
            background(0);
            currentGame.reset();
            gameOver = false;
        }


    } else {

        fill(255);
        textSize(32);
        textAlign(CENTER);
        gameOver = false;
        text("A - Regular Pong\nB - Brick Breaker Pong\nC - David and Goliath Pong\nD - DVD Pong\nE - Synesthesia Pong\nF - Meets the Specifications of this Assignment Pong", width / 2, height / 4);

    }


}