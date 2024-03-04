const Circle = require('../lib/circle')

describe('Circle', ()=>{
    //nested describe, what are we testing?
    describe('Test all properties', ()=>{
        it('text color and shape color', () => {
            const circle = new Circle('LOL', 'green', 'blue')
            expect(circle.Text).toEqual('LOL')
            expect(circle.Color).toEqual('green')
            expect(circle.SC).toEqual('blue')
        
        })
    })
    describe('method', ()=>{
        it('testing the render', ()=>{
            const circle = new Circle('asd', 'yellow', 'orange')
                                    //looking at the expected output               
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">  <circle cx="150" cy="100" r="100" fill="orange" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">asd</text> </svg>`)
        })
    })
})