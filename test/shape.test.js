const Shapes = require('../lib/shapes')

describe('Shapes', () => {
    describe('Test all properties', () =>{
        it('text color and shape color', () => {
            const shapes = new Shapes('Yes', 'blue', 'pink')
            expect(shapes.Text).toEqual('Yes')
            expect(shapes.Color).toEqual('blue')
            expect(shapes.SC).toEqual('pink')
        })
    })
    describe('method', () => {
        it('testing the values being saved', () => {
            const shapes = new Shapes('pop', 'gold', 'orange')
            expect(shapes.Text).toEqual('pop')
            expect(shapes.Color).toEqual('gold')
            expect(shapes.SC).toEqual('orange')
        })
    })
})