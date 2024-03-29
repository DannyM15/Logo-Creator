const inquirer = require('inquirer');
const fs = require('fs');

// Exports for each shape with the Shape Class inherited in each shape
const Square = require('./lib/square');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');

// Inquirer prompts to have the user design their logo.
inquirer.prompt([
    {
        type: 'input',
        name: 'Text',
        message: 'Enter up to three characters:',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'Color',
        message: 'Enter a color:',
        default: 'black'
    },
    {
        type: 'list',
        name: 'Shape',
        message: 'Select a Shape:',
        choices: [
            'Circle',
            'Square',
            'Triangle'
        ]
    },
    {
        type: 'input',
        name: 'SC', //Shape Color
        message: 'Enter a color for your shape:',
        default: 'green'
    },

// if states being used depending on which shape is chosen above
])
  .then((data) => {
    if(data.Shape === 'Square'){
        const square = new Square(data.Text, data.Color, data.SC)
        fs.writeFile('./examples/square.svg', square.render(), err =>{
            if(err){console.error(err)}
            console.log('success!')
        })
    }
    if(data.Shape === 'Circle'){
        const circle = new Circle(data.Text, data.Color, data.SC)
        fs.writeFile('./examples/circle.svg', circle.render(), err =>{
            if(err){console.error(err)}
            console.log('success!')
        })
    }   
    if(data.Shape === 'Triangle'){
        const triangle = new Triangle(data.Text, data.Color, data.SC)
        fs.writeFile('./examples/triangle.svg', triangle.render(), err =>{
            if(err){console.error(err)}
            console.log('success!')
        })
    }
})