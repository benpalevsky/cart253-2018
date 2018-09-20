// Exercise 1 - Moving pictures
// Ben Palevsky
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.

// The image of a clown face
var clownImage;
// The current position of the clown face
var clownImageX;
var clownImageY;

// The image of a clown face
var clownImage2;
// The current position of the clown face
var clownImage2X;
var clownImage2Y;

//image of shrimp
var shrimpImage;
//current position of shrimp
var shrimpImageX;
var shrimpImageY;

//image of swimmer
var swimmerImage;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;


// preload()
//
// Load the five images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  clownImage2 = loadImage("assets/images/clown2.png")
  shrimpImage = loadImage("assets/images/shrimp.png")
  swimmerImage = loadImage("assets/images/swimmer.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");
}


// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the clown image at the centre of the canvas
  clownImageX = clownImage2X = width/2;
  clownImageY = clownImage2Y = height/2;

  //set the initial position of the shrimp
  shrimpImageX = 0;
  shrimpImageY = height/2;

  // Start the felt image perfectly off screen above the canvas
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;

  // We'll use imageMode CENTER for this script
  imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {

  //make sure the shrimp never goes outside of the screen
  shrimpImageX = constrain(shrimpImageX, 0, width);

  //bump him slightly to the left
  shrimpImageX++;

  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;

  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;

  //we'll use the same distance var for the second clown
  xDistance = mouseX - clownImage2X;
  yDistance = mouseY - clownImage2Y;

  // Add 1/40th of the x and y distance to the clown's current (x,y) location
  clownImage2X = clownImage2X + xDistance/40;
  clownImage2Y = clownImage2Y + yDistance/40;

  // Draw the all the images
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);
  image(swimmerImage, mouseX, mouseY); //swimmer is positioned at the mouse
  image(clownImage2,clownImage2X,clownImage2Y);
  image(clownImage,clownImageX,clownImageY);
  image(shrimpImage, shrimpImageX, shrimpImageY);


}
