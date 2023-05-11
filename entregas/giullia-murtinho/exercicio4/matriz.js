const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
let addictionMatriz = 0;

for(let i = 0; i < matriz.length; i++){
  for(let j = 0; j < matriz[i].length; j++){
    addictionMatriz += matriz[i][j]
  }
}

console.log(addictionMatriz)
