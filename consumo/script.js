var input = require('fs').readFileSync('stdin', 'utf8');

const [ distance, fuel ] = input.split('\n').map(item => Number(item));

const total = distance / fuel;

console.log(`${total.toFixed(3)} km/l`);

