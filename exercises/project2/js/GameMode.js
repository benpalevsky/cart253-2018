function GameMode(type) {
    this.type = type;
}

GameMode.prototype.setup = function() {

    if (this.type == "REGULAR") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, 5, 5, 10, 1, 1.1);
        scoreboard = new Scoreboard(0, 0, 3);
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(0);
        osc.start();
    } else



    if (this.type == "BREAKOUT") {
        leftPaddle = new Paddle(0, height / 4, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(0, height - height / 4, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 8, height / 8, -3, -3, 10, 1, 1);
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(0);
        osc.start();


        var i = 0;
        var j = 0;

        bumperSize = 32;
        numberOfBumpersX = (width * 3 / 4) / bumperSize;
        numberOfBumpersY = height / bumperSize;


        for (i = 0; i < numberOfBumpersY; i++) {
            bumpers[i] = [];
            for (j = 0; j < numberOfBumpersX; j++) {
                bumpers[i][j] = new Paddle(width / 3 + (j * bumperSize), (i * bumperSize), bumperSize, bumperSize, 0, 0, 0, "BUMPER");
            }
        }
    } else



    if (this.type == "DAVID") {
        leftPaddle = new Paddle(0, height / 2, 60, 100, 2, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 30, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 2, height / 2, 5, 5, 10, 1, 1.1);
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        scoreboard = new Scoreboard(0, 0, 3);
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(0);
        osc.start();
    } else

    if (this.type == "DVD") {
        createCanvas(720, 480);
        scoreboard = null;
        leftPaddle = new Paddle(0, height / 2, 10, height, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, height, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        ball = new Ball(width / 4, height / 4, 1, 1, 80, 1, 1);
        osc = new p5.Oscillator();
        envelope = new p5.Envelope();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);


        osc.setType('sine');
        osc.freq(0);
        osc.start();
    } else


    if (this.type == "MUSHROOM") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        strokeWeight(1);
        ball = new Ball(width / 2, height / 2, 5, 5, 20, 5, 0.9);
        scoreboard = new Scoreboard(0, 0, 5);
        osc = new p5.Oscillator();
        envelope = new p5.Envelope();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);
        scoreboard.display();


        osc.setType('sine');
        osc.freq(0);
        osc.start();

    } else

    if (this.type == "MITOSIS") {
        leftPaddle = new Paddle(0, height / 2, 10, 60, 10, 83, 87, "LEFT");
        rightPaddle = new Paddle(width - 10, height / 2, 10, 60, 10, DOWN_ARROW, UP_ARROW, "RIGHT");
        balls[0] = new Ball(width / 2, height / 2, 0.1, 0.1, 20, 0.5, 1);
        osc = new p5.Oscillator();
        envelope = new p5.Env();
        envelope.setADSR(0.001, 0.5, 0.1, 0.5);
        envelope.setRange(1, 0);
        scoreboard = new Scoreboard(0, 0, 50);


        osc.setType('sine');
        osc.freq(0);
        osc.start();

        var i;
        var numberOfSplitters = 50;

        for (i = 0; i < numberOfSplitters; i++) {
            splitters[i] = new Splitter(random(0, width), random(0, height), 10, 10, 10, "SPLITTER");
        }

    }









}

GameMode.prototype.handleInput = function() {

    leftPaddle.handleInput(this.type);
    rightPaddle.handleInput(this.type);

}




GameMode.prototype.update = function() {


    leftPaddle.update();
    rightPaddle.update();

    if (this.type == "REGULAR") {
        ball.update();
        if (ball.isOffScreen() > 0) {
            scoreboard.update(leftPaddle);
            ball.reset(leftPaddle);
        } else if (ball.isOffScreen() < 0) {
            scoreboard.update(rightPaddle);
            ball.reset(rightPaddle);
        }
    }

    if (this.type == "BREAKOUT") {
        ball.update();

        for (i = 0; i < numberOfBumpersY; i++) {
            for (j = 0; j < numberOfBumpersX; j++) {
                bumpers[i][j].display();
                ball.handleCollision(bumpers[i][j]);

            }
        }


        if (ball.isOffScreen() < 0) {
            ball.reset(rightPaddle);
            background(0);
            gameIsActive = false;
            gameOver = true;
        }


    }

    if (this.type == "DAVID") {
        ball.update();

        if (ball.isOffScreen() > 0) {
            scoreboard.update(leftPaddle);
            ball.reset(leftPaddle);
        } else if (ball.isOffScreen() < 0) {
            scoreboard.update(rightPaddle);
            ball.reset(rightPaddle);
        }
    }

    if (this.type == "DVD") {
        ball.update();

        leftPaddle.speed -= 0.004;
        rightPaddle.speed -= 0.004;
        if (leftPaddle.speed < 0 || rightPaddle.speed < 0) {
            leftPaddle.speed = 0;
            rightPaddle.speed = 0;
        }
    }

    if (this.type == "MUSHROOM") {


        //ball.speed += 0.0001;
        ball.update();

        randomXOffset += 0.01;
        worldWrap(leftPaddle);
        worldWrap(rightPaddle);
        worldWrap(ball);


    }

    if (this.type == "MITOSIS") {

        var i;
        var j;

        for (i = 0; i < balls.length; i++) {
            if (balls[i].isOffScreen() > 0) {
                scoreboard.update(leftPaddle);
                balls[i].reset(leftPaddle);
            } else if (balls[i].isOffScreen() < 0) {
                scoreboard.update(rightPaddle);
                balls[i].reset(rightPaddle);
            }
            for (j = 0; j < splitters.length; j++) {
                balls[i].handleCollision(splitters[j]);
                balls[i].update();



            }

        }


    }
}



GameMode.prototype.display = function() {


    if (currentGame.type == "MUSHROOM") {} else {
        background(0);

    }

    if (scoreboard != undefined)
        scoreboard.display();


    if (currentGame.type == "MITOSIS") {
        for (i = 0; i < balls.length; i++) {
            balls[i].display();
        }

        for (i = 0; i < splitters.length; i++) {
            splitters[i].display();
        }
    } else {
        ball.display();
    }
    leftPaddle.display();
    rightPaddle.display();


}

GameMode.prototype.reset = function() {
    rightPaddle == null;
    leftPaddle == null;
    scoreboard == null;
    ball == null;

}

function worldWrap(item) {
    if (item.x > width) {
        item.x = -10;
        scoreboard.update(leftPaddle);
    } else if (item.x < -11) {
        item.x = width - 1;
        scoreboard.update(rightPaddle);
    } else if (item.y < 0) {
        item.y = height - 1;
    } else if (item.y > height) {
        item.x = 1;
    }
}