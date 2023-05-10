const soma = function (numEntrada) {
    if (numEntrada > 0) {

        let soma2 = 0;
        
        for (let i = 0; i <= numEntrada; i++) {
            soma2 = soma2 + i
        }
        console.log(soma2)
    } else {
        console.log('Valor indisponível')
    }
}

soma(5)