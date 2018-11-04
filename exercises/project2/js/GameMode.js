function GameMode(type) {
    this.type = type;
}

GameMode.prototype.setup = function() {
    if (this.type == "REGULAR") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, 5, 5, 10, 5, 1.1);
    } else



    if (this.type == "BREAKOUT") {
        leftPaddle = new Paddle(0, height / 4, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(0, height - height / 4, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, -5, -5, 10, 5, 1);


        var i = 0;
        var j = 0;

        bumperSize = 40;
        numberOfBumpersX = (width * 3 / 4) / bumperSize;
        numberOfBumpersY = height / bumperSize;


        for (i = 0; i < numberOfBumpersY; i++) {
            bumpers[i] = [];
            for (j = 0; j < numberOfBumpersX; j++) {
                bumpers[i][j] = new Paddle(width / 4 + (j * bumperSize), (i * bumperSize), bumperSize, bumperSize, 0, 0, 0, "BUMPER");
            }
        }
    } else



    if (this.type == "DAVID") {
        leftPaddle = new Paddle(0, height / 2, 60, 100, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 30, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, 5, 5, 10, 5, 1.1);
    } else

    if (this.type == "DVD") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, 5, 5, 80, 5, 1.1);
    }




}

GameMode.prototype.handleInput = function() {

    leftPaddle.handleInput(this.type);
    rightPaddle.handleInput(this.type);

}





GameMode.prototype.update = function() {

    ball.update();
    leftPaddle.update();
    rightPaddle.update();

    if (ball.isOffScreen() > 0) {
        scoreboard.update(leftPaddle);
        ball.reset();
    } else if (ball.isOffScreen() < 0) {
        scoreboard.update(rightPaddle);
        ball.reset();
    }

    if (this.type == "BREAKOUT") {

        for (i = 0; i < numberOfBumpersY; i++) {;
            for (j = 0; j < numberOfBumpersX; j++) {
                bumpers[i][j].display();
                ball.handleCollision(bumpers[i][j]);
            }
        }

    }
}

GameMode.prototype.display = function() {

    scoreboard.display();
    ball.display();
    leftPaddle.display();
    rightPaddle.display();


}