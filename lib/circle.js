const Shapes = require('./shapes')

// Class for the Circle shape.  
class Circle extends Shapes {
    constructor(Text, Color, SC) {
        super(Text, Color, SC)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">  <circle cx="150" cy="100" r="100" fill="${this.SC}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Color}">${this.Text}</text> </svg>`
    }
}

module.exports = Circle