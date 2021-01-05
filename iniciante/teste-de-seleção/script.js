var input = require('fs').readFileSync('stdin', 'utf8');

const [ A, B, C, D ] = input.split(' ').map(item => Number(item));

B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0
? console.log('Valores aceitos')
: console.log('Valores nao aceitos');