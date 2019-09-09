// In ES6

function test(a, b = 3, c = 42) {
  return a + b + c;
}
console.log(test(5)); //50

// Also

const test = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(test(5)); //50

// Or

const test = (a, b = 3, c = 42) => a + b + c;
console.log(test(5)); //50
