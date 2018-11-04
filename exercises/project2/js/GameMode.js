function GameMode(type) {
    this.type = type;
}

GameMode.prototype.setup = function(left, right) {
    if (this.type == "REGULAR") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
    }
}