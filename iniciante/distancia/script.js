var input = require('fs').readFileSync('stdin', 'utf8');
const result = (input * 60) / 30;
console.log(`${result} minutos`);
