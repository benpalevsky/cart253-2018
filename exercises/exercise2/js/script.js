/*********************************************************

Exercise 2 - The Artful Dodger
Pippin Barr

Starter code for exercise 2.

*********************************************************/

// The position and size of our avatar circle
var avatarX;
var avatarY;

var img;

var avatarLength = 10;

// Default the avatar's acceleration and velocity to 0 in case no key is pressed this frame
var avatarAX = 0;
var avatarAY = 0;

var avatarVX = 0;
var avatarVY = 0;

//max acceleration and velocity values
var aMax = 1;
var vMax = 5;

//dampening constant
var aDamp = 0.9;

var avatarSize = 50;

// The speed and velocity of our avatar circle
var avatarSpeed = .2;
var avatarVX = 0;
var avatarVY = 0;

// The position and size of the enemy circle
var enemyX;
var enemyY;
var enemySize = 50;
// How much bigger the enemy circle gets with each successful dodge
var enemySizeIncrease = 5;

// The speed and velocity of our enemy circle
var enemySpeed = 5;
var enemyVX = 5;
var enemyVY = 0;

// How much bigger the enemy circle gets with each successful dodge
var enemySpeedIncrease = 0.5;

var enemyAX = 0;
var enemyAY = 0;

// How many dodges the player has made
var dodges = 0;

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

  img = loadImage("assets/images/astronaut.png");  // Load the image


  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {
  // A pink background
  background(200);

  movePlayer();



  enemyAY += random(-aMax,aMax);
  enemyAX += random(-aMax,aMax);


  // The enemy always moves at enemySpeed (which increases)
  enemyVX +=  enemyAX;
  enemyVY +=  enemyAY;

  enemyVX = constrain(enemyVX, -aMax, aMax);
  enemyVY = constrain(enemyVY, -aMax, aMax);


  // Update the enemy's position based on its velocity
  enemyX += enemyVX;
  enemyY += enemyVY;

  //check collisions
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {

  }

  // Added worldwrap to the game, so the edges spawn you around the map
  if (avatarX < 0 - avatarSize) avatarX = width + avatarSize;
  else if (avatarX > width + avatarSize) avatarX = 0 - avatarSize;
  else if (avatarY < 0 - avatarSize) avatarY = height + avatarSize;
  else if (avatarY > height + avatarSize) avatarY = 0 - avatarSize;

  if (enemyX < 0 - enemySize) avatarX = width + avatarSize;
  else if (enemyX > width + enemySize) enemyX = 0 - avatarSize;
  else if (enemyY < 0 - enemySize) avatarY = height + avatarSize;
  else if (enemyY > height + enemySize) enemyY = 0 - avatarSize;


  // Display the current number of successful in the console

  // The player is black
  image(img, avatarX - avatarSize/2, avatarY - avatarSize/2);

  fill(120);

  triangle(avatarSize - avatarX, avatarSize + avatarY, avatarX - 20, 0 + avatarY, avatarX - 20, 10 + avatarY);

  // The enemy is red
  fill(255,0,0);
  // Draw the enemy as a circle
  ellipse(enemyX,enemyY,enemySize,enemySize);


  textSize(32);
  text("DODGES " + dodges, enemyX + 10, enemyY);
  fill(0, 102, 153);

}

function movePlayer(){
  // Left and right, with dampening
  if (keyIsDown(LEFT_ARROW)) avatarAX += -avatarSpeed;

  else if (!keyIsPressed){
    avatarAX += aDamp;

    avatarAX = constrain (avatarAX, -aMax, 0);
  }

  if (keyIsDown(RIGHT_ARROW)) avatarAX += avatarSpeed;

  else if (!keyIsPressed){
    avatarAX -= aDamp;
    avatarAX = constrain (avatarAX, 0, aMax);
  }



  // Up and down
  if (keyIsDown(UP_ARROW)) avatarAY += -avatarSpeed;

  else if (!keyIsPressed){
    avatarAY += aDamp;
    avatarAY = constrain (avatarAY, -aMax, 0);
  }

  if (keyIsDown(DOWN_ARROW)) avatarAY += avatarSpeed;

  else if (!keyIsPressed){
    avatarAY -= aDamp;
    avatarAY = constrain (avatarAY, 0, aMax);
  }

  //constrain max acceleration
  avatarAX = constrain(avatarAX, -aMax, aMax);
  avatarAY = constrain(avatarAY, -aMax, aMax);



  // Add the players acceleration to their velocity
  avatarVX += avatarAX;
  avatarVY += avatarAY;

  //constrain max velocity
  avatarVX = constrain(avatarVX, -vMax, vMax);
  avatarVY = constrain(avatarVY, -vMax, vMax);


  // Add the velocity to the position
  avatarX += avatarVX;
  avatarY += avatarVY;

}
