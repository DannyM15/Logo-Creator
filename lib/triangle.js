const Shapes = require('./shapes')

class Triangle extends Shapes {
    constructor(Text, Color, SC) {
        super(Text, Color, SC)
    }
    // need triangle measurements
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150,50 100,150 200,150" fill="${this.SC}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.Color}">${this.Text}</text> </svg>`
    }
}

module.exports = Triangle