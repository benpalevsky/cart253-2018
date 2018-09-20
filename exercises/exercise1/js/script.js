// Exercise 1 - Moving pictures
// Pippin Barr
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.

//mouse x velocity
var mouseVX;
var lastMouseXPosition;


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

//image of shrimp
var swimmerImage;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;


// preload()
//
// Load the two images we're using before the program starts

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
  mouseVX = mouseX - lastMouseXPosition;






  image(swimmerImage, mouseX, mouseY);



  shrimpImageX = constrain(shrimpImageX, 0, width);

  shrimpImageX++;

  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;

  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);

  // Move the clown by moving it 1/10th of its current distance from the mouse

  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;

  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;


  xDistance = mouseX - clownImage2X;
  yDistance = mouseY - clownImage2Y;

  clownImage2X = clownImage2X + xDistance/20;
  clownImage2Y = clownImage2Y + yDistance/20;

  // Draw all the images
  image(clownImage2,clownImage2X,clownImage2Y);

  image(clownImage,clownImageX,clownImageY);

  image(shrimpImage, shrimpImageX, shrimpImageY);


}
