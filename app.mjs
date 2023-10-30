import fs from 'fs';
import inquirer from 'inquirer';
import { createSVG } from './lib/shapes.js';

inquirer
  .prompt([
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
  ])
  .then((input) => {
    const svg = generateSVGLogo(input);
    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });