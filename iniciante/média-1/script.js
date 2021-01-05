var input = require('fs').readFileSync('stdin', 'utf8');

var [firstNum, secondNum] = input.split('\n').map(item => Number(item));

var MEDIA = ((firstNum * 3.5) + (secondNum * 7.5)) / 11;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);

