function printFizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    console.log(
      isMultipleOf3 && isMultipleOf5
        ? "FizzBuzz"
        : isMultipleOf3
        ? "Fizz"
        : isMultipleOf5
        ? "Buzz"
        : i
    );
  }
}

console.log("Input n = 5:") + printFizzBuzz(5) + console.log("");
console.log("Input n = 11:") + printFizzBuzz(11) + console.log("");
console.log("Input n = 15:") + printFizzBuzz(15) + console.log("");
