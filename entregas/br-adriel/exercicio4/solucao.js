const prompt = require('prompt-sync')();

function validarNumero(valor) {
  return !(typeof valor !== 'number' || Number.isNaN(valor));
}

function validarIntervalo(
  valor,
  limiteInferior = -1000,
  limiteSuperior = 1000
) {
  return !(valor < limiteInferior || valor > limiteSuperior);
}

function main() {
  let tamanhoInvalido = true;
  let linhas;
  let colunas;
  while (tamanhoInvalido) {
    linhas = parseInt(prompt('Digite o número de linhas da matriz: '));
    colunas = parseInt(prompt('Digite o número de colunas: '));

    tamanhoInvalido = !(
      validarNumero(linhas) &&
      validarNumero(linhas, 1, 1000) &&
      validarNumero(colunas) &&
      validarIntervalo(colunas, 1, 1000)
    );

    if (tamanhoInvalido) {
      console.log(`Tamanho inválido de matriz, tente novamente.\n`);
    }
  }

  let soma = 0;
  for (let l = 1; l <= linhas; l++) {
    for (let c = 1; c <= colunas; c++) {
      const elemento = parseInt(prompt(`Elemento [${l}][${c}]: `));
      if (validarNumero(elemento) && validarIntervalo(elemento)) {
        soma += elemento;
      } else {
        console.log(`Valor inválido, tente novamente.`);
        c--;
      }
    }
  }

  console.log(`\nA soma de todos os elementos da matriz é ${soma}.`);
}

main();
