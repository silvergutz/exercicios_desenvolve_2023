function hashtagPyramid(n) {
  let pyramid = '';
  for (let i = 1; i <= n; i++) {
    pyramid += ' '.repeat(n - i) + '#'.repeat(i * 2 - 1) + '\n';
  }
  console.log(pyramid);
}

console.log("Input n = 5:") + hashtagPyramid(5);
console.log("Input n = 7:") + hashtagPyramid(7);
console.log("Input n = 8:") + hashtagPyramid(8);
