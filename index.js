const fs = require('./fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

class Svg{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){

      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape){
      this.shapeElement = shape.render()

  }
}

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color:',
    },
  ]
  .then((input) => {
    const svg = generateSVGLogo(input);
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });