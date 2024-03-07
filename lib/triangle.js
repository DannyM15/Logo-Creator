const Shapes = require('./shapes')

// class for the triangle shape
class Triangle extends Shapes {
    constructor(Text, Color, SC) {
        super(Text, Color, SC)
    }
    // measurements for the triangle are (x,y) coordinates
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.SC}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Color}">${this.Text}</text> </svg>`
    }
}

module.exports = Triangle