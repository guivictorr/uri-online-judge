var input = require('fs').readFileSync('stdin', 'utf8');

var raio = Number(input)
var PI = 3.14159;
var area = (PI * Math.pow(raio, 2)).toFixed(4);

console.log(`A=${area}`);