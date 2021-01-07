var input = require('fs').readFileSync('stdin', 'utf8');

var [ A, B, C ] = input.split(' ').map(item => Number(item));

const delta = (Math.pow(B, 2)) - (4 * A * C);
const deltaRoot = Math.sqrt(delta);
const division = 2 * A;
const R1 = (-B + deltaRoot) / (division);
const R2 = (-B - deltaRoot) / (division); 

division === 0 || delta <= 0 
? console.log('Impossivel calcular')
: console.log(`R1 = ${R1.toFixed(5)}\nR2 = ${R2.toFixed(5)}`);
