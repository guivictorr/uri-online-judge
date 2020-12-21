var input = require('fs').readFileSync('stdin', 'utf8');

var [A, B, C] = input.split('\n').map(item => Number(item));

var MEDIA = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);

