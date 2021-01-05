var input = require('fs').readFileSync('stdin', 'utf8');

const raio = Number(input);
const pi = 3.14159;
const volume = ((4/3) * pi * Math.pow(raio, 3)).toFixed(3);

console.log(`VOLUME = ${volume}`);