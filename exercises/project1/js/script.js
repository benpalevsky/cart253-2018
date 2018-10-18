/******************************************************

Game - Chaser
Pippin Barr

A simple game of cat and mouse.

Physics-based movement, keyboard controls, health/stamina,
sprinting, random movement, screen wrap.

******************************************************/

// Track whether the game is over
var gameOver = false;
var xOff = []
var yOff = []

var numberOfEnemies = 20;
var growthRate = 20;

// Player position, size, velocity
var playerX;
var playerY;
var playerRadius = 4;
var playerVX = 0;
var playerVY = 0;
var playerSpeed = 2;
// Player health
var playerHealth;
var playerMaxHealth = 255;
// Player fill color
var playerFill = 50;

var sprintSpeed = 4;
var sprintRate = 0.1;

// Prey position, size, velocity
var enemyX = [];
var enemyY = [];
var enemyRadius = 8;
var enemyMaxSpeed = 4;
// Prey health
var enemyHealth = [];
var enemyMaxHealth = 100;
// Prey fill color
var enemyFill = 200;


var xOffP;
var yOffP;
var preyX;
var preyY;

var borderDiameter = 400;

var bark;



// Amount of health obtained per frame of "eating" the prey
var eatHealth = 10;
// Number of prey eaten during the game
var preyEaten = 0;

// setup()
//
// Sets up the basic elements of the game

function preload(){

  bark = new Audio('assets/sounds/bark.wav');

}

function setup() {




  createCanvas(500,500);

  numberOfEnemies += growthRate;

  noStroke();



  setupEnemies();
  setupPlayer();
  setupPrey();
}

// setupEnemies()
//
// Initialises prey's position, velocity, and health

function drawBorder(){

  fill(255);
  ellipse(width/2,height/2, borderDiameter);


}

function setupEnemies() {

  var i;
  for (i = 0; i < numberOfEnemies; i++) {
    xOff[i] = random(0,10000);
    yOff[i] = random(0,10000);
    enemyHealth[i] = enemyMaxHealth;
  }

}

function setupPrey(){

  preyX = random(0,width);
  preyY = random(0,width);
  xOffP = random(0,10000);
  yOffP = random(0,10000);


}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4*width/5;
  playerY = height/2;
  playerHealth = playerMaxHealth;
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  background(100,100,200);
  drawBorder();

  if (!gameOver) {
    handleInput();

    movePlayer();
    moveEnemies();
    movePrey();

    updateHealth();
    checkCollisions();

    drawPrey();
    drawEnemies();
    drawPlayer();
  }
  else {
    showGameOver();
  }
}

// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {

  if (keyIsDown(SHIFT)) {
    playerSpeed = sprintSpeed;
    //playerHealth -= sprintRate;
  } else {
    playerSpeed = 2;
  }

  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerSpeed;
  }
  else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerSpeed;
  }

  else {
    playerVY = 0;



  }
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX += playerVX;
  playerY += playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    playerX += width;
  }
  else if (playerX > width) {
    playerX -= width;
  }

  if (playerY < 0) {
    playerY += height;
  }
  else if (playerY > height) {
    playerY -= height;
  }
}

// updateHealth()
//
// Reduce the player's health (every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health, constrain to reasonable range
  //playerHealth = constrain(playerHealth - 0.5,0,playerMaxHealth);
  // Check if the player is dead
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
}

// checkCollisions()
//
// Check if the player overlaps the prey and updates health of both
function checkCollisions() {

  var d1 = dist(playerX, playerY, width/2, height/2);

  if (d1 > borderDiameter/2){

    showGameOver();
    noLoop();

  }

  var i = 0;

  for (i = 0; i < numberOfEnemies; i++) {
    var d2 = dist(playerX,playerY,enemyX[i],enemyY[i]);

    // Check if it's an overlap
    if (d2 < playerRadius + enemyRadius) {
      // Increase the player health
        showGameOver();
        noLoop();

      }

    }

  var d3 = dist(playerX, playerY, preyX, preyY);

  if (d3 < playerRadius + enemyRadius){
    bark.play();
    setup();
  }


}

// moveEnemies()
//
// Moves the prey based on random velocity changes
function moveEnemies() {

  var i;

  for (i = 0; i < numberOfEnemies; i++) {

      enemyX[i] = map(noise(xOff[i]), 0, 1, 0, 400);
      enemyY[i] = map(noise(yOff[i]), 0, 1, 0, 400);
      xOff[i] += 0.001;
      yOff[i] += 0.001;
    }

}

function movePrey(){

  preyX = map(noise(xOffP), 0, 1, 0, width);
  preyY = map(noise(yOffP), 0, 1, 0, width);
  xOffP += 0.001;
  yOffP += 0.001;

}





// drawEnemies()
//
// Draw the prey as an ellipse with alpha based on health
function drawEnemies() {

  for (i = 0; i < numberOfEnemies; i++) {

    fill(enemyFill,enemyHealth);
    ellipse(enemyX[i],enemyY[i],enemyRadius*2);

  }
}

function drawPrey(){

  fill(0,200,50);
  ellipse(preyX,preyY,enemyRadius*2);

}

// drawPlayer()
//
// Draw the player as an ellipse with alpha based on health
function drawPlayer() {
  fill(playerFill,playerHealth);
  ellipse(playerX,playerY,playerRadius*2);
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  textSize(32);
  textAlign(CENTER,CENTER);
  var gameOverText = "GAME OVER\n";
  gameOverText += "you ded."
  text(gameOverText,width/2,50);
}
