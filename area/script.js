var input = require('fs').readFileSync('stdin', 'utf8');

const [ A, B, C ] = input.split(' ').map(item => Number(item));

const TRIANGULO = (A * C) / 2;
const CIRCULO = 3.14159 * Math.pow(C, 2);
const TRAPEZIO = ((A + B) * C) / 2;
const QUADRADO = Math.pow(B, 2);
const RETANGULO = A * B;

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}\nCIRCULO: ${CIRCULO.toFixed(3)}\nTRAPEZIO: ${TRAPEZIO.toFixed(3)}\nQUADRADO: ${QUADRADO.toFixed(3)}\nRETANGULO: ${RETANGULO.toFixed(3)}`);