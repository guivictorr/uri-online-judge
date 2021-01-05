var input = require('fs').readFileSync('stdin', 'utf8');

const values = input.split(' ').map(item => Number(item));

let longest = 0;

values.forEach(value => longest = value > longest ? value : longest);

console.log(`${longest} eh o maior`);