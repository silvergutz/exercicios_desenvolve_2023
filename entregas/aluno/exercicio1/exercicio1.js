let array = []
function exibeNumero(entrada) {
    if (entrada <= 10) {
        for (let i = 0; i < entrada; i++) {
            array.push(" ".repeat(entrada - i - 1) + "#".repeat(i + 1))
        }
        for (const entrada of array) {
            console.log(entrada)
        }
    } else {
        console.log('Quantidade máxima de degraus alcaçada')
    }
}
exibeNumero(10)