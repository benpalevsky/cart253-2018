function Splitter(x, y, w, h, size, name) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.size = size;
    this.name = name;
}

Splitter.prototype.display = function() {

    fill(0, 100, 230);
    ellipse(this.x, this.y, this.w, this.h)

}