//note is what note the synth will play
//row number is 0, 1, 2, 3 etc (based on how many sliders in the sequencer)


function Slider(note, type) {

    this.instrument = new Instrument(note, type);
    this.type = type;
    this.handle_x = 0;
    this.handle_y = 0;


}


Slider.prototype.playNote = function() {

    this.instrument.oneShot();

}

Slider.prototype.reset = function() {

}

Slider.prototype.pause = function() {


}

Slider.prototype.start = function() {

}