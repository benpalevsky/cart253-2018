function Ball(x, y, speed, size){

  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.size = size;
  this.speed = speed;


}

Ball.prototype.update = function(img){

  this.x += this.vx * this.speed;
  this.y += this.vy * this.speed;

  if(this.x > (width - (img.width * this.size))){
    this.vx = -this.vx;
  }

  if(this.x < 0){
    this.vx = -this.vx;
  }

  if(this.y > (height - (img.height * this.size))){
    this.vy = -this.vy;
  }

  if(this.y < 0){
    this.vy = -this.vy;
  }

}

Ball.prototype.display = function(img){

  //rect(this.x,this.y,this.size,this.size);
  image(img, this.x, this.y, img.width * this.size, img.height * this.size);



}

Ball.prototype.reset = function(){

  this.x = width/2;
  this.y = height/2;

}
