class GuessingGame {
    constructor() {
     this.minimal = 0;
     this.mxml = 0;
     this.current = Math.round(((this.mxml + this.minimal)/2));
    }

    setRange(min, max) {
	this.minimal = min;
	this.mxml = max;
	this.current =  Math.round(((this.mxml + this.minimal)/2));
    }

    guess() { 
      return this.current;
    }

    lower() {
     this.mxml= this.current;
     this.current = Math.round(((this.mxml + this.minimal)/2));
    }

    greater() {
     this.minimal = this.current;
     this.current = Math.round(((this.mxml + this.minimal)/2));
    }
}

module.exports = GuessingGame;
