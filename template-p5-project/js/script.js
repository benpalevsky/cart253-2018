var x;
var y;
var speed = 10;
var vx;
var ax = 0.1;
function setup() {
  createCanvas(500,500);
  x = 0;
  y = height/2;
  vx = 0;
}
function draw() {
  vx = constrain(vx + ax,-speed,speed);
  x = x + vx;
  ellipse(x,y,50,50);
}
