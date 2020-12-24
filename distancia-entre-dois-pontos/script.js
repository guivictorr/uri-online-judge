var input = require('fs').readFileSync('stdin', 'utf8');

const [ array1, array2 ] = input.split('\n');

const [ x1, y1 ] = array1.split(' ');
const [ x2, y2 ] = array2.split(' ');

const result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(result.toFixed(4));
