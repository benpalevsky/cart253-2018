function Walker(x, y, size, speed) {

  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;

}

Walker.prototype.update = function() {

  var rand = (int(random(0, 4)));

  if (random(1) < 0.1) {
    this.x += (this.speed);
  } else if (random(1) < 0.2) {
    this.x -= (this.speed);
  } else if (random(1) < 0.3) {
    this.y += (this.speed);
  } else {
    this.y -= (this.speed);
  }

  this.x = constrain(this.x, 0, width);
  this.y = constrain(this.y, 0, height);

}

Walker.prototype.display = function() {

  fill(0, 0, 255, 15);
  ellipse(this.x, this.y, this.size);

}