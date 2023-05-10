"use strict"
let array = []
function exibeNumero(entrada, mesmoNumero) {
    let espacamento = mesmoNumero;
    let contador = 1;
    if (entrada, mesmoNumero > 0 && entrada, mesmoNumero <= 10) {
    for (let i = 1; i < entrada; i++) {
        array.push(" ".repeat(espacamento) + "#".repeat(contador) + " ".repeat(espacamento))
        if (espacamento > 0) { 
            espacamento = espacamento - 1
    }
        contador = contador + 2
    }
    
    for (const entrada of array) {
        console.log(entrada)
    }
    } else {
        console.log('Número Indisponivel');
    }
}
exibeNumero(10, 10)