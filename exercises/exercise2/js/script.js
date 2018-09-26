/*********************************************************

Exercise 2 - The Artful Dodger
Pippin Barr

Starter code for exercise 2.

*********************************************************/

// The position and size of our avatar circle
var avatarX;
var avatarY;

// Default the avatar's acceleration and velocity to 0 in case no key is pressed this frame
var avatarAX = 0;
var avatarAY = 0;

var avatarVX = 0;
var avatarVY = 0;

//max acceleration and velocity values
var aMax = 0.3;
var vMax = 5;

//dampening constant
var aDamp = 0.9;

var avatarSize = 50;

// The speed and velocity of our avatar circle
var avatarSpeed = .05;
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
// How much bigger the enemy circle gets with each successful dodge
var enemySpeedIncrease = 0.5;

// How many dodges the player has made
var dodges = 0;

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(500,500);

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
  background(255,220,220);





  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

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


  //else if (!keyIsPressed) avatarAY -= aDamp;




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



  // The enemy always moves at enemySpeed (which increases)
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed
    enemySize = 50;
    enemySpeed = 5;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;
    // Reset the dodge counter
    dodges = 0;
  }

  // Added worldwrap to the game, so the edges spawn you around the map
  if (avatarX < 0 - avatarSize) avatarX = width + avatarSize;
  else if (avatarX > width + avatarSize) avatarX = 0 - avatarSize;
  else if (avatarY < 0 - avatarSize) avatarY = height + avatarSize;
  else if (avatarY > height + avatarSize) avatarY = 0 - avatarSize;


  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made

    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
    // Increase the enemy's speed and size to make the game harder
    enemySpeed = enemySpeed + enemySpeedIncrease;
    enemySize = enemySize + enemySizeIncrease;
  }

  // Display the current number of successful in the console

  // The player is black
  fill(0);
  // Draw the player as a circle
  ellipse(avatarX,avatarY,avatarSize,avatarSize);


  // The enemy is red
  fill(255,0,0);
  // Draw the enemy as a circle
  ellipse(enemyX,enemyY,enemySize,enemySize);


  textSize(32);
  text("DODGES " + dodges, 10, 30);
  fill(0, 102, 153);

}
