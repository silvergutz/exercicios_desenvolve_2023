const n = Number(process.argv[2]);

// verifica validade do valor digitado pelo usuário
if (typeof n === 'undefined') {
  throw new Error(`Valor não definido`);
}
if (Number.isNaN(n)) throw new TypeError(`Valor inválido`);
if (n < 1 || n > 100)
  throw new RangeError(`O valor deve ser um inteiro de 1 a 100`);

for (let i = 1; i <= n; i++) {
  let impressao = '';
  if (i % 3 === 0) impressao += 'Fizz';
  if (i % 5 === 0) impressao += 'Buzz';
  console.log(impressao ? impressao : i);
}
