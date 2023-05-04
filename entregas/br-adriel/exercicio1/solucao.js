const numero_degraus = Number(process.argv[2]);

// verifica validade do valor digitado pelo usuário
if (typeof numero_degraus === 'undefined') {
  throw new Error(`Número de degraus não definido`);
}
if (Number.isNaN(numero_degraus)) throw new TypeError(`Valor inválido`);
if (numero_degraus < 1 || numero_degraus > 10)
  throw new RangeError(`O número de degraus deve ser um valor de 1 a 10`);

let resultado = ''; // string que será impressa na tela
let linhaAtual = 1; // variável de controle do while

while (linhaAtual <= numero_degraus) {
  // gera os espaços vazios da linha atual
  for (let i = numero_degraus - linhaAtual; i > 0; i--) {
    resultado += ' ';
  }

  // gera os caracteres do degrau da linha atual
  for (let i = 1; i <= linhaAtual; i++) {
    resultado += '#';
  }
  resultado += '\n';
  linhaAtual++;
}

console.log(resultado);
