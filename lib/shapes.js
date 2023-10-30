const {createSVG} = require('svg-builder');

module.exports = function generateSVGlogo(input) {
    const { text, textColor, shape, shapeColor } = input;

    const svgOptions = {
      width: 300,
      height: 200,
      children: [
        {
          type: 'text',
          content: text,
          x: 150,
          y: 100,
          fontSize: 24,
          fill: textColor,
        },
        {
          type: shape,
          width: 100,
          height: 100,
          x: 100,
          y: 50,
          fill: shapeColor,
        },
      ],
    };
  
    const svg = createSVG(svgOptions);
    return svg;
  };