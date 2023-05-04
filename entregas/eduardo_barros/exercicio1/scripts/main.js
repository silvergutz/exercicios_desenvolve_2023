function stairWayToHaven() {
  // Pedir um número ao usuário:
  let userNumber = parseInt(prompt('Digite um numero entre 1 e 10:'))

  // Validação dos parâmetros
  while (isNaN(userNumber) || userNumber > 10 || userNumber <= 0) {
    userNumber = parseInt(
      prompt('Digite apenas números. Eles precisam estar entre 1 e 10:')
    )
  }

  console.log(`Tamanho indicado pelo usuário: ${userNumber}`)

  // Construir um array do tamanho indicado pelo usuário:
  for (let i = 1; i <= userNumber; i++) {
    let row = ''

    for (let j = 1; j <= userNumber - i; j++) {
      row += ' '
    }

    for (let k = 1; k <= i; k++) {
      row += '#'
    }
    console.log(row)
  }
}

stairWayToHaven()
