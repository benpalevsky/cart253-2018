// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var bumpers = [];
var dvdImg;

var scoreboard;
var leftPaddle;
var rightPaddle;
var ball;
var gameIsActive = false;
var currentGame;

// setup()
//
// Creates the ball and paddles
function setup() {

    createCanvas(640, 480);
    background(0);

    fill(255);
    dvdImg = loadImage("assets/images/dvd.png");




    // Create a scoreboard
    scoreboard = new Scoreboard(0, 0);


    // Create the game

    currentGame = new GameMode("DVD");
    currentGame.setup();

}


function draw() {


    background(0);

    if (keyIsPressed) {
        gameIsActive = true;
    }

    if (gameIsActive) {


        currentGame.update();
        currentGame.handleInput();
        ball.handleCollision(leftPaddle);
        ball.handleCollision(rightPaddle);
        currentGame.display();

    } else {

        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("Press Any Key to Start", width / 2, height / 2);

    }


}