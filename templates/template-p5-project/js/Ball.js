function Ball(){

  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.size = 0.1;
  this.speed = 1;


}

Ball.prototype.update = function(img){

  this.x += this.vx * this.speed;
  this.y += this.vy * this.speed;

  if(ball.x > (width - (img.width * this.size))){
    ball.vx = -ball.vx;
  }

  if(ball.x < 0){
    ball.vx = -ball.vx;
  }

  if(ball.y > (height - (img.height * this.size))){
    ball.vy = -ball.vy;
  }

  if(ball.y < 0){
    ball.vy = -ball.vy;
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
