function Slider(minValue, maxValue, startValue, step, note, object, osc, env) {
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.startValue = startValue;
    this.step = step;
    this.note = note;
    this.object = createSlider(minValue, maxValue, startValue, step);


    this.osc = new p5.Oscillator();
    this.env = new p5.Env();
    this.env.setADSR(0.001, 0.5, 0.1, 0.1);
    this.env.setRange(1, 0);
    this.osc.setType('sine');
    freqValue = midiToFreq(this.note);
    this.osc.freq(freqValue);

}

Slider.prototype.playNote = function() {

    this.osc.start();
    this.env.play(this.osc, 0, 0.1);

}

Slider.prototype.reset = function() {
    slider[i].object.value(slider[i].minValue - 1)
}