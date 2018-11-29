function Regular() {
    this.y = 0;

}

Regular.prototype.draw = function() {

}


Regular.prototype.draw = function() {
    background("teal");

    line(0, this.y, width, this.y);
    this.y++;

    if (this.y > height)
        this.y = 0;
}