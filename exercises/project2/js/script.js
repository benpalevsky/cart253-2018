// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var numberOfBumpers = 50;
var bumpers = [];
var scoreboard;
var leftPaddle;
var rightPaddle;
var gameIsActive = false;
var gameMode;

// setup()
//
// Creates the ball and paddles
function setup() {
    createCanvas(640, 480);
    background(0);

    fill(255);

    var i = 0;
    numberOfBumpers = height / 20;

    for (i = 0; i < numberOfBumpers; i++) {
        bumpers[i] = new Paddle(width / 2, (i * numberOfBumpers), 20, 20, 0, 0, 0, "BUMPER");
    }



    // Create a scoreboard
    scoreboard = new Scoreboard(0, 0);

    // Create a ball
    ball = new Ball(width / 2, height / 2, 5, 5, 10, 5);

    // Create the game

    gameMode = new GameMode("REGULAR");
    gameMode.setup(leftPaddle, rightPaddle);

    // Create the left paddle with W and S as controls
    // Keycodes 83 and 87 are W and S respectively
    //leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
    //
    //rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");

}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {


    background(0);

    if (keyIsPressed) {
        gameIsActive = true;
    }

    if (gameIsActive) {

        leftPaddle.handleInput();
        rightPaddle.handleInput();

        ball.update();
        leftPaddle.update();
        rightPaddle.update();

        if (ball.isOffScreen() > 0) {
            scoreboard.update(leftPaddle);
            ball.reset();
        } else if (ball.isOffScreen() < 0) {
            scoreboard.update(rightPaddle);
            ball.reset();
        }

        ball.handleCollision(leftPaddle);
        ball.handleCollision(rightPaddle);

        for (i = 0; i < numberOfBumpers; i++) {
            bumpers[i].display();
            ball.handleCollision(bumpers[i]);
        }

        display();

    } else {

        fill(255);
        textSize(32);
        textAlign(CENTER);
        text("Press Any Key to Start", width / 2, height / 2);

    }


}


function display() {
    scoreboard.display();
    ball.display();
    leftPaddle.display();
    rightPaddle.display();
}