var input = require('fs').readFileSync('stdin', 'utf8');

const [ tempo, velocidadeMedia ] = input.split('\n').map(item => Number(item));

const consumo = 12;
const distancia = velocidadeMedia * tempo;
const gasto = distancia / consumo;

console.log(gasto.toFixed(3));