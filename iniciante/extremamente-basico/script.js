var input = require('fs').readFileSync('stdin', 'utf8');

var [ A, B ] = input.split('\n').map(item => Number(item));

var X = A + B; 

console.log(`X = ${X}`);
