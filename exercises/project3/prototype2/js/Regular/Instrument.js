function Instrument(note) {

    this.note = note;
    this.synth = Synth();
    this.synth.attack = ms(1);




}

Instrument.prototype.oneShot = function() {

    this.synth.note(this.note);
}



Instrument.prototype.draw = function() {

}