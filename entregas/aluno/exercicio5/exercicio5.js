

function lista (limite) {
    if (limite > 0 && limite <= 100) {
    for (i = 0; i < limite; i++)
        if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz') 
        }else if(i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else{
            console.log(i)
        }
    } else {
        console.log('Numero Indisponivel')
    }
}

lista(50)