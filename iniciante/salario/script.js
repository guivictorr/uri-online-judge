var input = require('fs').readFileSync('stdin', 'utf8');

var [ number, hours, value ] = input.split('\n').map(item => Number(item));

var SALARY = hours * value;

console.log(`NUMBER = ${number}\nSALARY = U$ ${SALARY.toFixed(2)}`);