var input = require('fs').readFileSync('stdin', 'utf8');

var [ name, fixSalary, sales ] = input.split('\n').map(item => Number(item));

var commission = sales * (15 / 100);
var total = commission + fixSalary;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);