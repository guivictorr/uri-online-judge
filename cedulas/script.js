var input = require('fs').readFileSync('stdin', 'utf8');

let total = Number(input);

const valores = [100, 50, 20, 10, 5, 2, 1];

console.log(total);

for (let valor of valores) {
  let qtdNotas = Math.floor(total / valor);
  console.log(`${qtdNotas} nota(s) de R$ ${valor},00`);
  total = total % valor;
}