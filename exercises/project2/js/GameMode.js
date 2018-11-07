function GameMode(type) {
    this.type = type;
}

GameMode.prototype.setup = function() {

    if (this.type == "REGULAR") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, 5, 5, 10, 5, 1.1);
        scoreboard = new Scoreboard(0, 0);
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(240);
        osc.start();
    } else



    if (this.type == "BREAKOUT") {
        leftPaddle = new Paddle(0, height / 4, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(0, height - height / 4, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, -5, -5, 10, 5, 1);
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(0);
        osc.start();


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
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(240);
        osc.start();
    } else

    if (this.type == "DVD") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 4, height / 4, 1, 1, 80, 5, 1.0);
        osc = new p5.Oscillator();
        envelope = new p5.envelope();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(240);
        osc.start();
    } else


    if (this.type == "MUSHROOM") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, 5, 5, 10, 5, 0.9);
        scoreboard = new Scoreboard(0, 0);
        osc = new p5.Oscillator();
        envelope = new p5.Envelope();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(240);
        osc.start();

    } else

    if (this.type == "OSCILLATOR") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(240);
        osc.start();
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

    if (this.type == "REGULAR") {
        if (ball.isOffScreen() > 0) {
            scoreboard.update(leftPaddle);
            ball.reset();
        } else if (ball.isOffScreen() < 0) {
            scoreboard.update(rightPaddle);
            ball.reset();
        }
    }

    if (this.type == "BREAKOUT") {

        for (i = 0; i < numberOfBumpersY; i++) {;
            for (j = 0; j < numberOfBumpersX; j++) {
                bumpers[i][j].display();
                ball.handleCollision(bumpers[i][j]);

            }
        }

    }

    if (this.type == "DVD") {
        leftPaddle.speed -= 0.004;
        rightPaddle.speed -= 0.004;
        if (leftPaddle.speed < 0 || rightPaddle.speed < 0) {
            leftPaddle.speed = 0;
            rightPaddle.speed = 0;
        }
    }

    if (this.type == "MUSHROOM") {

        leftPaddle.speed = noise(randomXOffset) * 12;
        rightPaddle.speed = noise(randomXOffset) * 12;

        leftPaddle.w = noise(randomXOffset) * 144;
        rightPaddle.h = noise(randomXOffset) * 144;

        leftPaddle.h = noise(randomXOffset) * 144;
        rightPaddle.w = noise(randomXOffset) * 144;

        leftPaddle.x += noise(randomYOffset);
        rightPaddle.x -= noise(randomZOffset);

        ball.size++;
        ball.speed += noise(randomZOffset);

        randomXOffset += 0.01;
        worldWrap(leftPaddle);
        worldWrap(rightPaddle);
        worldWrap(ball);


    }

    if (this.type == "OSCILLATOR") {

        if (ball.isOffScreen() > 0) {
            scoreboard.update(leftPaddle);
            ball.reset();
        } else if (ball.isOffScreen() < 0) {
            scoreboard.update(rightPaddle);
            ball.reset();
        }

    }


}

GameMode.prototype.display = function() {

    background(0);

    if (currentGame.type == "MUSHROOM") {
        background((map(sin(randomXOffset), -1, 1, 120, 150)), (map(sin(randomYOffset), -1, 1, 120, 230)), (map(sin(randomZOffset), -1, 1, 70, 230)));
    }

    if (scoreboard != undefined)
        scoreboard.display();

    ball.display();
    leftPaddle.display();
    rightPaddle.display();


}

function worldWrap(item) {
    if (item.x > width) {
        item.x = -10;
    } else if (item.x < -11) {
        item.x = width - 1;
    } else if (item.y < 0) {
        item.y = height - 1;
    } else if (item.y > height) {
        item.x = 1;
    }
}