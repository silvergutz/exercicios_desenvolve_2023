const altura = Number(process.argv[2]);

// verifica validade do valor digitado pelo usuário
if (typeof altura === 'undefined') {
  throw new Error(`Altura não definida`);
}
if (Number.isNaN(altura)) throw new TypeError(`Valor inválido`);
if (altura < 1 || altura > 10)
  throw new RangeError(`A altura deve ser um valor de 1 a 10`);

let resultado = ''; // string que será impressa na tela
let linhaAtual = 1; // variável de controle do while

while (linhaAtual <= altura) {
  // gera os espaços vazios do inicio da linha atual
  for (let i = altura - linhaAtual; i > 0; i--) {
    resultado += ' ';
  }

  // gera os caracteres do degrau da linha atual
  for (let i = 1; i < linhaAtual; i++) {
    resultado += '##';
  }
  resultado += '#';

  resultado += '\n';
  linhaAtual++;
}

console.log(resultado);
