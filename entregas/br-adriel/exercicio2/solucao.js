const limite = Number(process.argv[2]);

// verifica validade do valor digitado pelo usuário
if (typeof limite === 'undefined') {
  throw new Error(`Limite não definido`);
}
if (Number.isNaN(limite)) throw new TypeError(`Valor inválido`);
if (limite < 1 || limite > 100)
  throw new RangeError(`O limite deve ser um valor de 1 a 100`);

let soma = 0;
for (let i = 1; i <= limite; i++) {
  soma += i;
}

console.log(soma);
