var input = require('fs').readFileSync('stdin', 'utf8');

var [ firstNum, secondNum ] = input.split('\n').map(item => Number(item));

var SOMA = firstNum + secondNum;

console.log(`SOMA = ${SOMA}`);
