function Slider(minValue, maxValue, startValue, step, note, object) {
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.startValue = startValue;
    this.step = step;
    this.note = note;
    this.object = createSlider(minValue, maxValue, startValue, step);
}

Slider.prototype.playNote = function() {




}