/******************************************************************************
Where's Sausage Dog?
by Pippin Barr

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;
var size = 1;

// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;

// Keep track of whether they've won
var gameOver = false;


// UI parameters

var uiWidth = 300;
var uiHeight = 100;
var uiX;
var uiY = 0;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {

  var temp;

  targetImage = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");

  var r = random(0,1.1);

  if (r < 0.1) {
    temp = decoyImage1;
    decoyImage1 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.2) {
    temp = decoyImage2;
    decoyImage2 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.3) {
    temp = decoyImage3;
    decoyImage3 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.4) {
    temp = decoyImage4;
    decoyImage4 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.5) {
    temp = decoyImage5;
    decoyImage5 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.6) {
    temp = decoyImage6;
    decoyImage6 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.7) {
    temp = decoyImage7;
    decoyImage7 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.8) {
    temp = decoyImage8;
    decoyImage8 = targetImage;
    targetImage = temp;
  }
  else if (r < 0.9) {
    temp = decoyImage9;
    decoyImage9 = targetImage;
    targetImage = temp;
  }
  else if (r < 1.0) {
    temp = decoyImage10;
    decoyImage10 = targetImage;
    targetImage = temp;
  }
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  uiX = windowWidth - 300;
  background("#ffff00");
  imageMode(CENTER);

  // Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {
    // Choose a random location for this decoy
    var x = random(0,width);
    var y = random(0,height);

    var size = random (10, 150);

    // Generate a random number we can use for probability
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough
    if (r < 0.1) {
      image(decoyImage1,x,y,size,size);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y,size,size);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y,size,size);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y,size,size);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y,size,size);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y,size,size);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y,size,size);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y,size,size);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y,size,size);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y,size,size);
    }
  }

  // Once we've displayed all decoys, we choose a location for the target
  targetX = random(0,width);
  targetY = random(0,height);

  while (targetX + targetImage.width > uiX) {
    targetX = random(0,width);
  }

  while (targetY + targetImage.height < uiY + uiHeight){
    targetY = random(0,height);
  }


  size = random (10, 150);

  // And draw it (this means it will always be on top)
  image(targetImage,targetX,targetY, size, size);

  //The colour purple
  fill(140, 0, 100);
  // Our UI rectangle
  rect(windowWidth - 300, 0, uiWidth, uiHeight);

  textSize(16);
  fill(255);
  text('Help me find this good boy', windowWidth - 290, 20);
  fill(0, 200, 100);
  text('Click on him if you see him', windowWidth - 290, 30, 150, 120);
  fill(255);
  textSize(10);
  text("I miss him so much :'(", windowWidth - 290, 80);


  image(targetImage, width - targetImage.width/2, 50);

}

function draw() {


  if (gameOver) {




    background('#fae');
    image(targetImage, targetX, targetY, image.width/size, image.height/size);

    targetX+=20;
    targetY-=20;


    worldWrap();

    // Prepare our typography
    textFont("Helvetica");
    textSize(60);
    textAlign(CENTER);
    noStroke();
    fill(0);
    // Tell them they won!
    text("Thank you. You, and you alone have helped me find my good boy.",30,30, 800, 800);

    noFill();
    stroke(0);
    strokeWeight(10);
    ellipse(targetX,targetY,targetImage.width,targetImage.height);
  }

}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}

function worldWrap(){
  if (targetX > windowWidth) targetX = 0;
  if (targetY < 0) targetY = windowHeight;

}
