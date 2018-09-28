/*********************************************************

Exercise 2 - The Artful Dodger++
Ben Palevsky

*********************************************************/

// The position, velocity and acceleration and size of our avatar circle
var avatarX;
var avatarY;

var nonsense = [
"Utter nonsense is belief in the interrelatedness of all things",
"An idea takes the world for granted.",
"Chair number eleven gambles with lives, happiness, and even destiny itself!",
"What was the person thinking when they discovered cow’s milk was fine for human consumption… and why did they do it in the first place!?",
"Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn’t so bad after all.",
"I really want to go to work, but I am too sick to drive.",
"If I don’t like something, I’ll stay away from it.",
"He said he was not there yesterday; however, many people saw him there.",
"The sky is clear; the stars are twinkling.",
"It was getting dark, and we weren’t there yet.",
"Please wait outside of the house.",
"Tom got a small piece of pie.",
"Don't step on the broken glass.",
"We have a lot of rain in June.",
"Wednesday is hump day, but has anyone asked the camel if he’s happy about it?",
"The body may perhaps compensates for the loss of a true metaphysics.",
"Everyone was busy, so I went to the movie alone.",
"Writing a list of random sentences is harder than I initially thought it would be.",
"Rock music approaches at high velocity.",
"The waves were crashing on the shore; it was a lovely sight.",
"The stranger officiates the meal.",
"I'd rather be a bird than a fish.",
"This is a Japanese doll.",
"Check back tomorrow; I will see if the book has arrived.",
"Should we start class now, or should we wait for everyone to get here?",
"Let me help you with your baggage.",
"He didn’t want to go to the dentist, yet he went anyway.",
"Malls are great places to shop; I can find everything I need under one roof.",
"I will never be this young again. Ever. Oh damn… I just got older.",
"If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?",
"I currently have 4 windows open up… and I don’t know why.",
"The memory we used to share is no longer coherent.",
"She advised him to come back at once.",
"I am happy to take your donation; any amount will be greatly appreciated.",
"If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.",
"I want to buy a onesie… but know it won’t suit me.",
"He turned in the research paper on Friday; otherwise, he would have not passed the class.",
"How was the math test?",
"The clock within this blog and the clock on my laptop are 1 hour different from each other.",
"Wow, does that work?",
"Mary plays the piano.",
"We need to rent a room for our party.",
"The shooter says goodbye to his love.",
"They got there early, and they got really good seats.",
"I love eating toasted cheese and tuna sandwiches.",
"Joe made the sugar cookies; Susan decorated them.",
"She wrote him a long letter, but he didn't read it.",
"Cats are good pets, for they are clean and are not noisy.",
"If Purple People Eaters are real… where do they find purple people to eat?",
"She always speaks to him in a loud voice.",
"There were white out conditions in the town; subsequently, the roads were impassable.",
"When I was little I had a car door slammed shut on my hand. I still remember it quite vividly.",
"Is it free?",
"Lets all be unique together until we realise we are all the same.",
"She did not cheat on the test, for it was not the right thing to do.",
"She works two jobs to make ends meet; at least, that was her reason for not having time to join us.",
"This is the last random sentence I will be writing and I am going to stop mid-sent",
"The quick brown fox jumps over the lazy dog.",
"Yeah, I think it's a good environment for learning English.",
"The book is in front of the table.",
"He told us a very exciting adventure story.",
"The river stole the gods.",
"I would have gotten the promotion, but my attendance wasn’t good enough.",
"He ran out of money, so he had to stop playing poker.",
"She folded her handkerchief neatly.",
"We have never been to Asia, nor have we visited Africa.",
"She only paints with bold colors; she does not like pastels.",
"Last Friday in three week’s time I saw a spotted striped blue worm shake hands with a legless lizard.",
"She borrowed the book from him many years ago and hasn't yet returned it.",
"Italy is my favorite country; in fact, I plan to spend two weeks there next year.",
"My Mum tries to be cool by saying that she likes all the same things that I do.",
"I am counting my calories, yet I really want dessert.",
"Christmas is coming.",
"The lake is a long way from here.",
"I was very proud of my nickname throughout high school but today- I couldn’t be any different to what my nickname was.",
"There was no ice cream in the freezer, nor did they have money to go to the store.",
"I checked to make sure that he was still alive.",
"Abstraction is often one floor above you.",
"The old apple revels in its authority.",
"I hear that Nancy is very pretty.",
"A glittering gem is not enough.",
"Sixty-Four comes asking for bread.",
"She did her best to help him.",
"Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn’t and they don’t recommend anyone else do it either.",
"Two seats were vacant.",
"She was too short to see over the fence.",
"A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.",
"The mysterious diary records the voice.",
"I am never at home on Sundays.",
"Where do random thoughts come from?",
"A song can make or ruin a person’s day if they let it get to them.",
"I want more detailed information.",
"I often see the time 11:11 or 12:34 on clocks.",
"Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.",
"Hurry!",
"I think I will buy the red car, or I will lease the blue one."
];

var nonsenseIndex = 1;


var message;

// Default the avatar's acceleration and velocity to 0 in case no key is pressed this frame

var avatarVX = 0;
var avatarVY = 0;
var avatarAX = 0;
var avatarAY = 0;

//our players image
var img;

var avatarLength = 10;


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
var enemySize = 120;
// How much bigger the enemy circle gets with each successful dodge
var enemySizeIncrease = 5;


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


function draw() {

  // Draw the background
  background(200);

  //process player controls
  movePlayer();

  //check if the collisions are happening
  checkCollisions();

  //see if we're world wrapping
  checkWorldWrap();

  //draw all the things
  render();
}

function render(){

  // Display the current number of successful in the console





  // The enemy is red
  fill(255,0,0);
  // Draw the enemy as a circle
  ellipse(enemyX,enemyY,enemySize,enemySize);

  //text settings
  textAlign(LEFT);
  textSize(14);
  fill(0, 102, 153);

  //render a sentence
  text(nonsense[nonsenseIndex], avatarX + 45, avatarY - 45, 180, 150);



  //check if the size of the ball is 0 to know whether or not to end the game
  if (enemySize <= 0){
    textSize(24);
    fill(0);
    background(45, 175, 0);
    text("YOU KNOW ALL THERE IS TO KNOW :v)", 15, 30);
  } else {
    textSize(24);
    fill(0);
    text("LEARN ABOUT THIS FASCINATING MAN :)", 15, 30);
  }


  // Draw the player
  image(img, avatarX - avatarSize/2, avatarY - avatarSize/2);

}

function checkWorldWrap(){


  // Added worldwrap to the game, so you can go across the sides and come back
  if (avatarX < 0 - avatarSize){
    avatarX = width + avatarSize;
  }

  else if (avatarX > width + avatarSize){
    avatarX = 0 - avatarSize;
  }

  else if (avatarY < 0 - avatarSize){
    avatarY = height + avatarSize;
  }

  else if (avatarY > height + avatarSize){
    avatarY = 0 - avatarSize;
  }
}


function checkCollisions(){



  //check collisions
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    nonsenseIndex = Math.floor(random(0,95));
    enemyX = random(0, width);
    enemyY = random(0, height);
    enemySize -= 10;


  }

}

function movePlayer(){
  // Left and right, with dampening
  if (keyIsDown(LEFT_ARROW)){
    avatarAX += -avatarSpeed;


  }

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

  // Reset the acceleration to 0
  avatarAX = 0;
  avatarAY = 0;

}
