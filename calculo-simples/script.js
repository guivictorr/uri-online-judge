var input = require('fs').readFileSync('stdin', 'utf8');

var [ item1, item2 ] = input.split('\n');

var [ idItem1, qtdItem1, valueItem1 ] = item1.split(' ')
var [ idItem2, qtdItem2, valueItem2 ] = item2.split(' ')

var item1Total = valueItem1 * qtdItem1;
var item2Total = valueItem2 * qtdItem2;

var total = item1Total + item2Total;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
