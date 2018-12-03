//numberOfSliders is how may sliders in the Sequencer
//seqCanvasHeight and seqCanvasWidth are the height on width of the Sequencer
//scale is an array of strings like 'c3', 'd3', 'e3'. Scale must be larger than numberOfSliders and ordered
//steps is how many "notches there are"


function Sequencer(numberOfSliders, seqCanvasHeight, seqCanvasWidth, steps, scale) {

    this.numberOfSliders = numberOfSliders;
    this.seqCanvasHeight = seqCanvasHeight;
    this.seqCanvasWidth = seqCanvasWidth;
    this.steps = steps;
    this.scale = scale;

    this.sliders = [];

    for (var i = 0; i < numberOfSliders; i++) {
        this.sliders[i] = new Slider(scale[i]);
        this.sliders[i].handle_x = 0;
        this.sliders[i].handle_y = i * (this.seqCanvasHeight / this.numberOfSliders);
    }

}

Sequencer.prototype.moveSliders = function() {

    //move sliders and worldwrap
    for (var i = 0; i < numberOfSliders; i++) {

        //check if we're out of the screen
        if (this.sliders[i].handle_x > ((this.seqCanvasWidth / this.steps) * (this.steps - 1))) {
            this.sliders[i].handle_x = 0;
            this.sliders[i].playNote();
        } else {
            this.sliders[i].handle_x += (this.seqCanvasWidth / this.steps);

        }

    }

}

Sequencer.prototype.displaySliders = function() {

    for (var i = 0; i < numberOfSliders; i++) {
        rect(this.sliders[i].handle_x, sliders[i].handle_y, this.seqCanvasWidth / this.steps, this.seqCanvasHeight / numberOfSliders);
    }


}

Sequencer.prototype.reset = function() {

}

Sequencer.prototype.pause = function() {


}

Sequencer.prototype.start = function() {

}