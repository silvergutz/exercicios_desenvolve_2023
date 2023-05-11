const matriz = [
    [12,-8,15,6,36],
  [1,6,20,-9,52],
  [0,-4,0,-8,41],
  [45,62,-9,-25,-100],
  [9,34,-60,20,10]
  ];
  
  function calculo(matriz) {
    const count = matriz.length;
    let result = 0;
    if (count > 0 && count <= 1000) {
        for(let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++)
                result += matriz[i][j];
        }
    }
    return result;
  }
  
  console.log(calculo(matriz));