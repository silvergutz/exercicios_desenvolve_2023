const number = 5;
let stairCase = '';

for(let i = 1; i <= number; i++){ 
    stairCase = " ".repeat(number-i) + '#'.repeat(i) 
    console.log(stairCase)
}


