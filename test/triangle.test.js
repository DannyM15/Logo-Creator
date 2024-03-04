const Triangle = require('../lib/triangle')

describe('Triangle', ()=> {
    describe('test all properties', ()=>{
        it('test all properties', ()=>{
            const triangle = new Triangle('LOL', 'green', 'blue')
            expect(triangle.Text).toEqual('LOL')
            expect(triangle.Color).toEqual('green')
            expect(triangle.SC).toEqual('blue')

        })    
    })
    describe('method', ()=>{
        it('testing the render', ()=>{
            const triangle = new Triangle('asd', 'yellow', 'orange')
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150,50 100,150 200,150" fill="orange" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">asd</text> </svg>`)
        })
    })

})