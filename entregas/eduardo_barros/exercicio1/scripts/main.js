function stairWayToHaven() {
  console.clear()

  let userNumber = parseInt(prompt('Digite um numero entre 1 e 10:'))

  while (isNaN(userNumber) || userNumber > 10 || userNumber <= 0) {
    userNumber = parseInt(
      prompt('Digite apenas números. Eles precisam estar entre 1 e 10:')
    )
  }

  console.log(`Tamanho indicado pelo usuário: ${userNumber}`)

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

  alert(`Tudo certo. Abra o seu console para ver o resultado.`)
}

const button = document.querySelector('.btn-iniciar')

button.addEventListener('click', stairWayToHaven)
