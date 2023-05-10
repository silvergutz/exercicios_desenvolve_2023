function sumAllNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return `A soma de todos os números inteiros positivos menores ou iguais a ${n} é ${sum}.`;
}

console.log(`Test case 1: ${sumAllNumbers(5)}`)
console.log(`Test case 2: ${sumAllNumbers(7)}`)
console.log(`Test case 3: ${sumAllNumbers(8)}`)

