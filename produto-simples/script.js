var input = require('fs').readFileSync('stdin', 'utf8');

var [ firstNum, secondNum ] = input.split('\n').map(item => Number(item));

var PROD = firstNum * secondNum;

console.log(`PROD = ${PROD}`);
