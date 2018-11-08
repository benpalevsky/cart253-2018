// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments


function Ball(x, y, vx, vy, size, speed, multiplier) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.speed = speed;
    this.multiplier = multiplier;
}

// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
Ball.prototype.update = function() {
    // Update position with velocity
    this.x += this.vx * this.speed;
    this.y += this.vy * this.speed;

    if (currentGame.type == "MUSHROOM" && (frameCount % 9 == 0 || frameCount == 1)) {
        while (lastNote == note) {
            note = int(random(0, scaleArray.length - 1));
        }
        midiValue = scaleArray[note];
        freqValue = midiToFreq(midiValue);
        osc.freq(freqValue);
        envelope.play(osc, 0, 0.1);
        lastNote = note;
    }

    // Constrain y position to be on screen
    this.y = constrain(this.y, 0, height - this.size);

    // Check for touching upper or lower edge and reverse velocity if so
    if (this.y === 0 || this.y + this.size === height) {
        this.vy = -this.vy;
        if (currentGame.type != "MUSHROOM") {
            while (lastNote == note) {
                note = int(random(0, scaleArray.length - 1));
            }
            midiValue = scaleArray[note];
            freqValue = midiToFreq(midiValue);
            osc.freq(freqValue);
            envelope.play(osc, 0, 0.1);
            lastNote = note;
        }

    }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function() {
    // Check for going off screen and reset if so
    if (this.x + this.size < 0) {
        return -1;
    } else if (this.x > width) {
        return 1;
    } else {
        return 0;
    }
}

// display()
//
// Draw the ball as a rectangle on the screen

var x, y, z;
x = 101;
y = 31;
z = 431;

Ball.prototype.display = function() {

    fill(255);

    if (currentGame.type == "DVD") {
        // rect(this.x, this.y, this.size / 1.1, this.size / 1.1);

        image(dvdImg, this.x, this.y, dvdImg.width / 20, dvdImg.height / 20);

    } else if (currentGame.type == "MUSHROOM") {



        fill((map(scaleArray[note], scaleArray[0], scaleArray[scaleArray.length - 1], 200, 255)), (map(sin(y), -1, 1, 0, 255)), (map(sin(z), -1, 1, 0, 255)));
        rect(this.x, this.y, this.size, this.size);
        x += 0.1;
        y += 0.1;
        z += 0.1;

    } else {
        rect(this.x, this.y, this.size, this.size);
    }
}



// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
Ball.prototype.handleCollision = function(paddle) {
    // Check if the ball overlaps the paddle on x axis
    if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
        // Check if the ball overlaps the paddle on y axis
        if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
            // If so, move ball back to previous position (by subtracting current velocity)
            // this.x -= this.vx;
            // this.y -= this.vy;
            // Reverse x velocity to bounce
            this.vx = -this.vx;
            this.vx *= this.multiplier;


            while (lastNote == note) {
                note = int(random(0, scaleArray.length - 1));
            }
            midiValue = scaleArray[note];
            freqValue = midiToFreq(midiValue);
            osc.freq(freqValue);
            envelope.play(osc, 0, 0.1);
            lastNote = note;



            if (paddle.name == "BUMPER") {
                paddle.x = 10000;
            }

        }
    }
}

// reset()
//
// Set position back to the middle of the screen
Ball.prototype.reset = function() {
    this.x = width / 2;
    this.y = height / 2;
    this.vx = this.speed;
}