var input = require('fs').readFileSync('stdin', 'utf8');

const total = Number(input);

const years = Math.floor(total / 365);
const months = Math.floor(total % 365 / 30);
const days = Math.floor(total % 365 % 30);

console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);


