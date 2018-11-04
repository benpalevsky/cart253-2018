function Scoreboard(p1score, p2score) {
    this.p1score = p1score;
    this.p2score = p2score;
}


Scoreboard.prototype.display = function() {
    fill(255);
    textSize(32);
    text(this.p1score + " " + this.p2score, width / 2, 30);
}


Scoreboard.prototype.update = function(scoringPaddle) {
    if (scoringPaddle.name == "LEFT") {
        this.p1score++;
    } else if (scoringPaddle.name == "RIGHT") {
        this.p2score++;
    }

}