var input = require('fs').readFileSync('stdin', 'utf8');

const total = Number(input);

const seconds = Math.floor(total % 60);
const hours = Math.floor(total / 3600);
const minutes = Math.floor(total % 3600 / 60);

console.log(`${hours}:${minutes}:${seconds}`);


