const chosenNumber = 15;
let createdPyramid = '';

for(let i = 1; i <= chosenNumber; i++){ 
    createdPyramid = " ".repeat(chosenNumber-i) + '#'.repeat(i) + '#'.repeat(i-1) 
    console.log(createdPyramid)
}