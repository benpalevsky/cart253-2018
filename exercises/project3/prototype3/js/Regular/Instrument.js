function Instrument(note, type) {

    this.type = type;
    this.note = note;

    if (this.type === "SYNTH") {

        this.synth = Synth();
        this.synth.attack = ms(1);

    }



}

Instrument.prototype.oneShot = function() {


    if (this.type === "SYNTH") {

        this.synth.note(this.note);

    } else if (this.type === "DRUM") {

        if (this.note === "Kick") {

            Kick().play();

        } else if (this.note === "Snare") {

            Snare().play();

        } else if (this.note === "Hat") {

            Hat().play();

        } else if (this.note === "Clave") {

            Clave().play();

        } else if (this.note === "Cowbell") {

            Cowbell().play();

        } else if (this.note === "Conga") {

            Conga().play();

        }
    }
}



Instrument.prototype.draw = function() {

}