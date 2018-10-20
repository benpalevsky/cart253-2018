function Walker(x, y, size, speed, colour) {

  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
  this.colour = colour;

}

Walker.prototype.update = function() {

  var rand = (int(random(0, 4)));

  if (rand == 0) {
    this.x += (this.speed);
  } else if (rand == 1) {
    this.x -= (this.speed);
  } else if (rand == 2) {
    this.y += (this.speed);
  } else if (rand == 3) {
    this.y -= (this.speed);
  }

  this.x = constrain(this.x, 0, width);
  this.y = constrain(this.y, 0, height);

}

Walker.prototype.display = function() {

  fill(this.colour);
  ellipse(this.x, this.y, this.size);

}