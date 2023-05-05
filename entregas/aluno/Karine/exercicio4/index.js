function sumAllElements(mat) {
  return mat.flat().reduce((acc, element) => acc + element, 0);
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matMultipliedByTwo = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

console.log(`A soma de todos os elementos da matriz é ${sumAllElements(mat)}.`);
console.log(`A soma de todos os elementos da matriz é ${sumAllElements(matMultipliedByTwo)}.`);
