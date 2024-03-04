const Square = require('../lib/square')
       // label   callback
describe('Square', ()=>{
    //nested describe, what are we testing?
    describe('Test all properties', ()=>{
        it('text color and shape color', () => {
            const square = new Square('LOL', 'green', 'blue')
            expect(square.Text).toEqual('LOL')
            expect(square.Color).toEqual('green')
            expect(square.SC).toEqual('blue')
        
        })
    })
    describe('method', ()=>{
        it('testing the render', ()=>{
            const square = new Square('asd', 'yellow', 'orange')
                                    //looking at the expected output               
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill="orange" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">asd</text> </svg>`)
        })
    })
})