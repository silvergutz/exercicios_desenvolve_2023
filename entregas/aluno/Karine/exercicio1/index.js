function hashtagStaircase(n) {
  let staircase = "";
  for (let i = 1; i <= n; i++) {
    staircase += " ".repeat(n - i) + "#".repeat(i) + "\n";
  }
  console.log(staircase);
}

console.log("Input n = 4:") + hashtagStaircase(4);
console.log("Input n = 5:") + hashtagStaircase(5);
console.log("Input n = 7:") + hashtagStaircase(7);
