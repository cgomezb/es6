// Unpack the elements of an array

let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// Using a function

let a = () => [1, 3, 2];
let [one, , two] = a();

console.log(one); // 1
console.log(two); // 2

// Simplifies assignment and swapping values

let a, b, c = 4, d = 8;
[a, b = 6] = [2];
// a = 2, b = 6

[c, d] = [d, c];
// c = 8, d = 4

// Interchange values
let a = 5, b = 7;
[a, b] = [b, a];
// a = 7, b = 5

// Strings are iterable

let [a, b, c] = 'Sololearn';
console.log(a, b, c); // S o l

// Hidden 'arguments' iterable in functions

function getInfo() {
  let [name, age] = arguments;

  return {
    name,
    age
  }
}

getInfo('ben', 24); // {name: 'ben', age: 24}

// Also

let arr = ['1', '2', '3', '4', '5'];
let [a, b, ...c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3, 4, 5

// Or

let [a, b = 2, c, d = 4, e] = [1, , 3, , 5];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
